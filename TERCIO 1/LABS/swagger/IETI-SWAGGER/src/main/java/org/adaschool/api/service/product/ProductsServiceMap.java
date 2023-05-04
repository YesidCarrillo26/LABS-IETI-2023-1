package org.adaschool.api.service.product;

import org.adaschool.api.repository.product.Product;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class ProductsServiceMap implements ProductsService {

    @Override
    public Product save(Product product) {
        return null;
    }

    @Override
    public Optional<Product> findById(String id) {
        return null;
    }

    @Override
    public List<Product> all() {
        return null;
    }

    @Override
    public void deleteById(String id) {
    }

    @Override
    public Product update(Product product, String productId) {
        return null;
    }
}
