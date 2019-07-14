import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  lat: number;
  lng: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.lat = navParams.data.location.lat;
    this.lng = navParams.data.location.lng;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  onDismiss() {
    this.viewCtrl.dismiss();
  }

}
