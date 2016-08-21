import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {NavController, Platform} from 'ionic-angular';
import {Geolocation} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
	
	private baseUrl: string = 'https://maps.googleapis.com/maps/api/place';
	private key: string = 'YOUR KEY';
  private restaurants: Array<Object>;
  private details: Object;

  constructor(public navCtrl: NavController, private _http: Http, private _platform: Platform) {
  	this._platform.ready().then(
  		() => Geolocation.getCurrentPosition()
  			.then(
  				loc => {
  					let location = `${loc.coords.latitude},${loc.coords.longitude}`;
  					this.getRestaurants(location);
  				},
  				err => console.log(err)
  			),
  		err => console.log(err)
  	);
  }

  private getRestaurants (location) {
  	
  	let url = `${this.baseUrl}/nearbysearch/json`
  	let query = `key=${this.key}&location=${location}&radius=500&type=restaurant`;
  	
  	this._http.get(`${url}?${query}`).subscribe(
  		res => this.restaurants = res.json().results,
  		err => console.log(err)
  	);

  }

  private showDetails(id) {
  	let url = `${this.baseUrl}/details/json`
  	let query = `key=${this.key}&placeid=${id}`;
  	
		this._http.get(`${url}?${query}`).subscribe(
  		res => this.navCtrl.push({details: res.json()}),
  		err => console.log(err)
  	);
  }

}
