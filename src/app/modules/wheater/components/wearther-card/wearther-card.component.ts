import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { weatherDatas } from './../../../../models/Interfaces/weatherDatas';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wearther-card',
  templateUrl: './wearther-card.component.html',
  styleUrls: []
})
export class WeartherCardComponent {
  // Dados da Previsão do tempo Recebimento pelo pai
  @Input() weatherDatasInput!: weatherDatas;

 minTemperatureIcon = faTemperatureLow;
 maxTemperatureIcon = faTemperatureHigh;
humidityIcon = faDroplet;
windIcon = faWind;
}
