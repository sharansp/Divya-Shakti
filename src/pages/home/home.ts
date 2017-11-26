import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventsPage } from '../events/events';
import { JagadgurusPage } from '../jagadgurus/jagadgurus';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	slides = [];

  constructor(public navCtrl: NavController) {
  	this.slides.push('assets/img/sanklpa-yatre-6.jpg');
    this.slides.push('assets/img/sanklpa-yatre.jpg');
  	this.slides.push('assets/img/sanklpa-yatre-5.jpg');
  	/*var audio = new Audio('/assets/audio/guru-brahma.mp3');
  	audio.play();*/
  }

  goToEvents(params){
    if (!params) params = {};
    this.navCtrl.push(EventsPage);
  }
  
  goToJagadgurus(params){
     if (!params) params = {};
    this.navCtrl.push(JagadgurusPage);
  }

  goToSlideImage(params){
    if(params.includes('devotee-reg')){
     this.navCtrl.push(JagadgurusPage); 
    }

  }
}
