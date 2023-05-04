package com.example.kata.model;

public class WeatherRequest {
    private Weather weather;

    public WeatherRequest() {
    }

    public WeatherRequest(Weather weather) {
        this.weather = weather;
    }

    public Weather getWeather() {
        return weather;
    }

    public void setWeather(Weather weather) {
        this.weather = weather;
    }
}
