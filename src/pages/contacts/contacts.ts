import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {

  constructor(public navCtrl: NavController) {
  }

  followUsClickFB  (arg) {
  	alert(arg);
  	 window.open('fb://page/MugalkhodJidagaMath/', '_system', 'location=no');
  	//window.open('https://www.facebook.com/1401408870089080', '_system');
  	//https://stackoverflow.com/questions/4191492/launch-facebook-app-from-other-app
  }
  
}
