import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventsPage } from '../events/events';
import { SankalpaYatrePage } from '../sankalpa-yatre/sankalpa-yatre';
import { JagadgurusPage } from '../jagadgurus/jagadgurus';
import { GalleryPage } from '../gallery/gallery';
import { BlogsPage } from '../blogs/blogs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	slides = [];


  constructor(public navCtrl: NavController) {

    this.slides.push('assets/img/sankalpa-yatre-1.jpg');
    
    this.slides.push('https://lh3.googleusercontent.com/-jpQrN6xtC5k/WiZr8PGokvI/AAAAAAAAAfk/HPyuErTgRdkbl-FjNIG-DKsIuO2mzup9ACL0BGAYYCw/h785/2017-12-05.jpg');

    this.slides.push('https://lh3.googleusercontent.com/-DYlCSUd09gU/WkVtzjaKxMI/AAAAAAAAAjI/aDeElQkvYesd6UcKKQvUqbiG-ruvTiTzACL0BGAYYCw/h689/2017-12-28.jpg');
    this.slides.push('https://lh3.googleusercontent.com/-BJT8wUKaMk0/WiZq_3M8hCI/AAAAAAAAAfY/Gr574vYcqrkQGgcFS3BKWFxWKbtZRjKWwCL0BGAYYCw/h692/2017-12-05.jpg');
    this.slides.push('https://lh3.googleusercontent.com/-2qWuNRsGRfQ/WiZhRdTiC9I/AAAAAAAAAfE/O_ZPInnpOGMhF_jWDzsB4Pghh2bkRPqTACL0BGAYYCw/h798/2017-12-05.jpg');
    this.slides.push('https://lh3.googleusercontent.com/-i8NJdms-NiA/WiZhSPtF4vI/AAAAAAAAAfE/LRdMF3KuaoM4up7BB5rF-VEaaPD8BScCACL0BGAYYCw/h852/2017-12-05.jpg');
    this.slides.push('https://lh3.googleusercontent.com/-GdrycZRoDyM/WiZhQhPSluI/AAAAAAAAAfE/jQf8BHHM7zsHwh8Px-X0porRtXW7hntigCL0BGAYYCw/h839/2017-12-05.jpg');
    this.slides.push('https://lh3.googleusercontent.com/-xLHHL3ocuEs/WiZhJVaXZ_I/AAAAAAAAAe0/Moll4EeO99QK7iq92QPAvnl5T05j3pJMwCL0BGAYYCw/h1140/2017-12-05.jpg');


    
  	/*var audio = new Audio('/assets/audio/guru-brahma.mp3');
  	audio.play();*/
  }

  goToEvents(params){
    if (!params) params = {};
    this.navCtrl.push(EventsPage);
  }

  goToBlogs(params){
    if (!params) params = {};
    this.navCtrl.push(BlogsPage);
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
