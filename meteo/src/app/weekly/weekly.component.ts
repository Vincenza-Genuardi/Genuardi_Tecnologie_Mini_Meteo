import { Component } from '@angular/core';
import { MeteoServiceService } from '../meteo-service.service';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WEEKLYComponent {
  weatherData: any;
  cityName: any;
  
  constructor(private meteoService: MeteoServiceService) { }

  ngOnInit(): void {
    this.get5dayWeather();
  }

  get5dayWeather() {
    this.meteoService.get5dayWeather(this.cityName)
      .then(data => {
        this.weatherData = data;
      })
      .catch(error => {
        console.error("Errore nella richiesta:", error);
      });
  }
}