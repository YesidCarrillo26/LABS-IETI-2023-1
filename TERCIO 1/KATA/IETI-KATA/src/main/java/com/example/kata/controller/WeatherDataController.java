package com.example.kata.controller;

import com.example.kata.model.Weather;
import com.example.kata.model.WeatherData;
import com.example.kata.model.WeatherRequest;
import com.example.kata.service.WeatherDataService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/weather/")
public class WeatherDataController {
    private final WeatherDataService weatherDataService;

    public WeatherDataController(WeatherDataService weatherDataService) {
        this.weatherDataService = weatherDataService;
    }


//    @PostMapping("{locationId}")
//    public ResponseEntity<WeatherRequest> createWeatherReport(@PathVariable String locationId, @RequestBody WeatherRequest weatherRequest) {
//        try{
//            if(weatherDataService.findById(locationId)!=null){
//                weatherDataService.save(weatherRequest);
//            }
//            return new ResponseEntity("Se creo el reporte del clima exitosamente", HttpStatus.OK);
//            //return new ResponseEntity(userPost, HttpStatus.OK);
//        }catch (Exception e){
//            e.printStackTrace();
//            return new ResponseEntity("No se pudo crear el reporte del clima", HttpStatus.BAD_REQUEST);
//        }
//    }

    @PostMapping()
    public ResponseEntity<WeatherRequest> createWeatherReport(@RequestBody WeatherRequest weatherRequest) {
        try{
            weatherDataService.save(weatherRequest);
            return new ResponseEntity("Se creo el reporte del clima exitosamente", HttpStatus.OK);
            //return new ResponseEntity(userPost, HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity("No se pudo crear el reporte del clima", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("{locationId}")
    public ResponseEntity<WeatherData> getWeatherReport(@PathVariable String locationId) {
        try{
            WeatherData bc = weatherDataService.findById(locationId);
            //return new ResponseEntity("Estos son los usuarios disponibles");
            return new ResponseEntity(bc,HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity("No se pudiero cargar correctamente el reporte del clima", HttpStatus.BAD_REQUEST);
        }
    }

}
