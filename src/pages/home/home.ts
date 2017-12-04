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
    this.slides.push('assets/img/sankalpa-yatre-1.jpg');
    this.slides.push('assets/img/sankalpa-yatre-2.jpg');
    this.slides.push('assets/img/sankalpa-yatre-3.jpg');
  	//this.slides.push('assets/img/sankalpa-yatre-4.jpg');
    this.slides.push('assets/img/anubhava-manatapa-1.jpg');
    this.slides.push('assets/img/anubhava-manatapa-2.jpg');
    this.slides.push('assets/img/anubhava-manatapa-3.jpg');
    this.slides.push('assets/img/anubhava-manatapa-4.jpg');
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
