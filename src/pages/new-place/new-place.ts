// import { Place } from '../../model/place.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacesService } from '../../services/places.service';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the NewPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  location: { lat: number, lng: number } = { lat: 0, lng: 0 }

  constructor(public navCtrl: NavController, public navParams: NavParams, private placesService: PlacesService, private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
  }

  onAddPlace(value: { title: string }) {
    this.placesService.addPlace({ title: value.title, location: this.location });
    this.navCtrl.pop();
  }

  onLocateUser() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp)
      this.location.lat = resp.coords.latitude;
      this.location.lng = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
