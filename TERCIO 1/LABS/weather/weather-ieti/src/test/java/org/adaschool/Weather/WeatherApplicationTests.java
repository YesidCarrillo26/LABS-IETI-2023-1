package org.adaschool.Weather;

import org.adaschool.Weather.controller.WeatherReportController;
import org.adaschool.Weather.data.WeatherApiResponse;
import org.adaschool.Weather.data.WeatherReport;
import org.adaschool.Weather.service.WeatherReportService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
class WeatherApplicationTests {
	@Mock
	private WeatherReportController weatherReportController;

	@InjectMocks
	private WeatherReportService weatherReportService;


	@Test
	public void getWeatherReportTest() {
		WeatherReport weatherReport = new WeatherReport();
		WeatherApiResponse.Main main = new WeatherApiResponse.Main();
		main.setHumidity(89.0);
		main.setTemperature(0.0);
		weatherReport.setHumidity(main.getHumidity());
		weatherReport.setTemperature(main.getTemperature());
		Mockito.when(weatherReportController.getWeatherReport(37.8267,-122.4233)).thenReturn(weatherReport);
		final WeatherReport weatherReportRes = weatherReportController.getWeatherReport(37.8267,-122.4233);
		Assertions.assertEquals(weatherReport.getHumidity(),weatherReportRes.getHumidity());
		Assertions.assertEquals(weatherReport.getTemperature(),weatherReportRes.getTemperature());
	}

}