
import { Component, OnInit } from '@angular/core';
import { MeteoServiceService } from '../meteo-service.service';


@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TODAYComponent implements OnInit {
  weatherData: any;
  cityName: any;
  
  constructor(private meteoService: MeteoServiceService) { }

  ngOnInit(): void {
    this.getCurrentWeather();
  }

  getCurrentWeather() {
    this.meteoService.getCurrentWeather(this.cityName)
      .then(data => {
        this.weatherData = data;
      })
      .catch(error => {
        console.error("Errore nella richiesta:", error);
      });
  }
}


