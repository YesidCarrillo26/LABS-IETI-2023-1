package org.adaschool.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
/*@EnableSwagger2
@ComponentScan(basePackages = {"org.adaschool.api"})*/
public class SpringBootJavaAssignmentsApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootJavaAssignmentsApplication.class, args);
    }


}
