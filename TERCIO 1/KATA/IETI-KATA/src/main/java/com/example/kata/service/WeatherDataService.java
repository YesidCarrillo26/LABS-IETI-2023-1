package com.example.kata.service;

import com.example.kata.model.Weather;
import com.example.kata.model.WeatherData;
import com.example.kata.model.WeatherRequest;
import com.example.kata.repository.WeatherDataRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class WeatherDataService implements WeatherDataRepository {

    private final HashMap<Weather, WeatherRequest> weatherDataHashMap = new HashMap<>();
    //private final List<WeatherData> weatherDataList = new ArrayList<>();

    @Override
    public WeatherRequest save(WeatherRequest weatherRequest) {
        return weatherDataHashMap.put(weatherRequest.getWeather(),weatherRequest);
    }

    @Override
    public WeatherData findById(String locationId) {
        //return weatherDataHashMap.get(locationId);
        return null;
    }
}
