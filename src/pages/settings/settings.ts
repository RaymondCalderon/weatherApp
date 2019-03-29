import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city: string;
  data: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private storage: Storage) {

    this.storage.get('location').then((val) => {
      console.log('val:' + val)
      if (val != null) {
        let location = JSON.parse(val);
        this.city = location.city;
      } else {
        this.geolocation.getCurrentPosition().then((resp) => {
          // resp.coords.latitude
          // resp.coords.longitude
          this.data = resp.coords.latitude + ',' + resp.coords.longitude
          console.log(this.data);
        }).catch((error) => {
          console.log('Error getting location', error);
        });

        city: this.data
      }
      console.log(this.city);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm() {
    let location = {
      city: this.city,
    }
    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }

}
