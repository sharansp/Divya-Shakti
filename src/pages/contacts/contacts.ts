

import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';


declare var google;

//@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {@ViewChild('map') mapElement: ElementRef;
  map: any;
  start = '';  // this should be current loaction
  end = "16.444317,74.968643";     // This should be destination(drop down select of famous mutts)
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.initMap();
  }

  initMap() {
    var uluru = {lat: 16.444317, lng: 74.968643};
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 8,
      center: uluru  // Mugalkhod mutt
    });
   
        var marker = new google.maps.Marker({
          position: uluru,
          map: this.map
        });

    this.directionsDisplay.setMap(this.map);
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
  
}
