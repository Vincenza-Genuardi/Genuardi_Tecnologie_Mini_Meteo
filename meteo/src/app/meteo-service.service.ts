import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeteoServiceService {
  
  constructor() { }

  public getCurrentWeather(citta: string): Promise<any> {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citta}&appid=e591f5bcf025277806249cb2e46b42e7&lang=it&units=metric`)
      .then(response => response.json())
      .then(data => {
        var tempValue = data['main']['temp'];
        var tempMin = data['main']['temp_min']
        var tempMax = data['main']['temp_max']
        var humidity = data['main']['humidity']
        var windspeed = data['wind']['speed']
        var rain = data['rain'] ? data['rain']['1h'] : null; // Controlla se 'rain' è definito
        var nameValue = data['name'];
        var descValue = data['weather'][0]['description'];
        var country = data['sys']['country']
  
        return {
          temperature: tempValue,
          minTemperature: tempMin,
          maxTemperature: tempMax,
          humidity: humidity,
          windSpeed: windspeed,
          rain: rain,
          city: nameValue,
          description: descValue,
          country: country
        };
      });
  }

  public get5dayWeather(citta: string) {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${citta}&appid=e591f5bcf025277806249cb2e46b42e7&units=metric&lang=it`)
      .then(response => response.json())
      .then(data => {
        const weatherData = [];
        data.list.forEach(item => {
          const tempValue = item.main.temp;
          const tempFeelslike = item.main.feels_like;
          const tempMin = item.main.temp_min;
          const tempMax = item.main.temp_max;
          const humidity = item.main.humidity;
          const windspeed = item.wind.speed;
          const rain = item.pop;
          const descValue = item.weather[0].description;
          const date = item.dt_txt;

          weatherData.push({
            temperature: tempValue,
            feelsLike : tempFeelslike,
            minTemperature: tempMin,
            maxTemperature: tempMax, 
            humidity: humidity,
            windSpeed: windspeed,
            rain: rain,
            description: descValue,
            data : date

          });
        });
        console.log(weatherData);
        return weatherData;
      });
  }
}



