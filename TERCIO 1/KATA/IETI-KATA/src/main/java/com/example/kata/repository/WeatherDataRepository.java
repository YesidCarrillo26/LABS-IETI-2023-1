package com.example.kata.repository;

import com.example.kata.model.WeatherData;
import com.example.kata.model.WeatherRequest;
import org.springframework.stereotype.Repository;

@Repository
public interface WeatherDataRepository {
    WeatherRequest save(WeatherRequest weatherRequest);

    WeatherData findById(String locationId);
}
