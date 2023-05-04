package com.example.kata.model;

public class WeatherData {
    private Location location;
    private Weather weather;

    public WeatherData() {
    }

    public WeatherData(Location location, Weather weather) {
        this.location = location;
        this.weather = weather;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public Weather getWeather() {
        return weather;
    }

    public void setWeather(Weather weather) {
        this.weather = weather;
    }
}
