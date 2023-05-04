package org.adaschool.api.security;


import io.jsonwebtoken.*;
import org.adaschool.api.controller.auth.TokenDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

import static org.adaschool.api.utils.Constants.*;


@Component
public class JwtRequestFilter
        extends OncePerRequestFilter {

    private final String secret;

    public JwtRequestFilter(@Value("${jwt.secret}") String secret) {
        this.secret = secret;
    }

    private String generateToken(Date expirationDate ) {
        return Jwts.builder()
                .setSubject( "63ee58a721b9bc75cde782a1" )
                .claim( CLAIMS_ROLES_KEY, "USER" )
                .setIssuedAt(new Date() )
                .setExpiration( expirationDate )
                .signWith( SignatureAlgorithm.HS256, secret )
                .compact();
    }

    private TokenDto generateTokenDto() {
        Calendar expirationDate = Calendar.getInstance();
        expirationDate.add( Calendar.MINUTE, TOKEN_DURATION_MINUTES );
        String token = generateToken(expirationDate.getTime() );
        return new TokenDto( token, expirationDate.getTime());
    }

    @Override
    protected void doFilterInternal( HttpServletRequest request, HttpServletResponse response, FilterChain filterChain )
            throws ServletException, IOException {
        final String authHeader = request.getHeader( "Authorization" );

        if ( "OPTIONS".equals( request.getMethod() ) )
        {
            response.setStatus( HttpServletResponse.SC_OK );
            filterChain.doFilter( request, response );
        }
        else
        {
            if ( authHeader == null || !authHeader.startsWith( "Bearer " ) )
            {
                filterChain.doFilter( request, response );
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, MISSING_TOKEN_ERROR_MESSAGE);
                return;
            }

            final String token = authHeader.substring( 7 );

            try
            {
                final Claims claims = Jwts.parser().setSigningKey( "secret" ).parseClaimsJws( token ).getBody();
                request.setAttribute( "claims", claims );


            }
            catch ( final SignatureException e )
            {
                filterChain.doFilter( request, response );
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED,TOKEN_EXPIRED_MALFORMED_ERROR_MESSAGE);
                response.setStatus( HttpServletResponse.SC_OK );


            }
            catch (ExpiredJwtException e) {
                TokenDto newToken = generateTokenDto();
                Jws<Claims> claims = Jwts.parser().setSigningKey(secret).parseClaimsJws(newToken.token());
                Claims claimsBody = claims.getBody();
                String subject = claimsBody.getSubject();
                List<String> roles = new ArrayList<String>();
                roles.add("USER");
                roles.add("ADMIN");
                SecurityContextHolder.getContext().setAuthentication(new TokenAuthentication(token, subject, roles));
                request.setAttribute("claims", claimsBody);
                request.setAttribute("jwtUserId", subject);
                request.setAttribute("jwtUserRoles", roles);
                response.setStatus(HttpServletResponse.SC_OK);


                filterChain.doFilter(request, response);
            }
        }

    }
}
