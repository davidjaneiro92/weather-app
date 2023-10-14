import { WeatherService } from '../../services/weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import { weatherDatas } from 'src/app/models/Interfaces/weatherDatas';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  initialCityName = 'São Paulo';
  searchIcon = faMagnifyingGlass
  weatherDatas!: weatherDatas;

  constructor(private WeatherService: WeatherService){}
  ngOnInit(): void {
    this.gerWeatherData(this.initialCityName)
  }

  gerWeatherData(cityName: string): void{
    this.WeatherService.getWeatherDatas(cityName)
    .pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (response) =>{
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas)
      },
      error: (error) => console.log(error),
    });
  }

  onSubmit(): void{
    this.gerWeatherData(this.initialCityName)
    this.initialCityName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
