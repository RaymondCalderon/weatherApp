import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  weather: any;
  location:{
    city: string;
  }

  data:string = '';
  constructor(public navCtrl: NavController, 
    private weatherProvider: WeatherProvider,
    private geolocation:Geolocation,
    private storage: Storage) {

  }


  ionViewWillEnter() {
    this.storage.get('location').then((val) => {
      if (val != null) {
        this.location = JSON.parse(val);
      } else {
        this.geolocation.getCurrentPosition().then((resp) => {
          // resp.coords.latitude
          // resp.coords.longitude
          this.data = resp.coords.latitude + ','+ resp.coords.longitude
          console.log(this.data);
         }).catch((error) => {
           console.log('Error getting location', error);
         });

        this.location = {
          city: this.data
        }
      }

      this.weatherProvider.getForecast(this.location.city).subscribe(weather => {
        //console.log(weather);
        this.weather = weather;
      });
    });
  }
  

}
//:D