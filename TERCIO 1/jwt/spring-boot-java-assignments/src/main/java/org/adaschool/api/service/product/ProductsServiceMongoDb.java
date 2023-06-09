package org.adaschool.api.service.product;

import org.adaschool.api.repository.product.Product;
import org.adaschool.api.repository.product.ProductMongoRepository;
import org.adaschool.api.security.encrypt.PasswordEncryptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductsServiceMongoDb implements ProductsService {

    private final ProductMongoRepository productMongoRepository;

    private final PasswordEncryptionService passwordEncryptionService;

    @Autowired
    public ProductsServiceMongoDb(@Autowired ProductMongoRepository productMongoRepository,@Autowired PasswordEncryptionService passwordEncryptionService) {
        this.productMongoRepository = productMongoRepository;
        this.passwordEncryptionService = passwordEncryptionService;
    }

    @Override
    public Product save(Product product) {
        return productMongoRepository.save(product);
    }

    @Override
    public Optional<Product> findById(String id) {
        return productMongoRepository.findById(id);
    }

    @Override
    public List<Product> all() {
        return productMongoRepository.findAll();
    }

    @Override
    public void deleteById(String id) {
        productMongoRepository.deleteById(id);
    }

    @Override
    public Product update(Product product, String productId) {
        return null;
    }
}
