import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey = '9635398130c546abb9a04040192603';
  url;
  url2;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.apixu.com/v1/current.json?key=9635398130c546abb9a04040192603&q='
    this.url2 = 'http://api.apixu.com/v1/forecast.json?key=9635398130c546abb9a04040192603&q='
  }

  getWeather(city){
    return this.http.get(this.url+city)
    .map(res => res.json());
  }

  getForecast(city){
    return this.http.get(this.url2+city+'&days=5')
    .map(res => res.json());
  }

}
