import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
/*
  Generated class for the DetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/details/details.html',
})
export class DetailsPage {

	private details: Object;

  constructor(private navCtrl: NavController, public _navParams: NavParams) {
  	this.details = this._navParams.get('details');
  }

}
