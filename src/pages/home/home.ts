import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventsPage } from '../events/events';
import { SankalpaYatrePage } from '../sankalpa-yatre/sankalpa-yatre';
import { JagadgurusPage } from '../jagadgurus/jagadgurus';
import { GalleryPage } from '../gallery/gallery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	slides = [];

  constructor(public navCtrl: NavController) {
  	this.slides.push('assets/img/sanklpa-yatre-6.jpg');
    this.slides.push('assets/img/sanklpa-yatre.jpg');
    //this.slides.push('assets/img/sanklpa-yatre-4.jpg');
  	this.slides.push('assets/img/sanklpa-yatre-5.jpg');
  	/*var audio = new Audio('/assets/audio/guru-brahma.mp3');
  	audio.play();*/
  }

  goToEvents(params){
    if (!params) params = {};
    this.navCtrl.push(EventsPage);
  }

  goToSankalpaYatre(params){
    if (!params) params = {};
    this.navCtrl.push(SankalpaYatrePage);
  }
  
  goToJagadgurus(params){
     if (!params) params = {};
    this.navCtrl.push(JagadgurusPage);
  }

  goToGallery(params){
    if (!params) params = {};
     this.navCtrl.push(GalleryPage); 
  }

  goToSlideImage(params){
    if(params.includes('sanklpa-yatre')){
     this.navCtrl.push(SankalpaYatrePage); 
    }

  }
}
