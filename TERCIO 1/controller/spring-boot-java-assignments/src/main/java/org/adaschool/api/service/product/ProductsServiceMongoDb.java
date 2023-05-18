package org.adaschool.api.service.product;

import com.mongodb.assertions.Assertions;
import org.adaschool.api.repository.product.Product;
import org.adaschool.api.repository.product.ProductDto;
import org.adaschool.api.repository.product.ProductMongoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProductsServiceMongoDb implements ProductsService {

    private final ProductMongoRepository productMongoRepository;

    @Autowired
    public ProductsServiceMongoDb(ProductMongoRepository productMongoRepository) {
        this.productMongoRepository = productMongoRepository;
    }


    @Override
    public Product save(Product product) {
        Product saveProduct = productMongoRepository.save(product);
        return saveProduct;
    }

    @Override
    public Optional<Product> findById(String id) {
        Optional<Product> product = productMongoRepository.findById(id);
        return product;
    }

    @Override
    public List<Product> all() {
        List<Product> pro = productMongoRepository.findAll();
        return pro;
    }

    @Override
    public void deleteById(String id) {
        productMongoRepository.deleteById(id);
    }

    @Override
    public Product update(Product product, String productId) {
        productMongoRepository.deleteById(productId);
        return productMongoRepository.save(product);
    }
}