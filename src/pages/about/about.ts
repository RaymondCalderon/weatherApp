import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  data:string = '';
  constructor(public navCtrl: NavController, private geolocation:Geolocation) {

  }

  locate(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.data = 'Lat: ' + resp.coords.latitude + ' <br>' + 'Lng: ' + resp.coords.longitude
      console.log(this.data);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
