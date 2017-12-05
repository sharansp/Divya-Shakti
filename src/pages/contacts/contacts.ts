import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {

  constructor(public navCtrl: NavController, private socialSharing: SocialSharing) {
      // Check if sharing via com.whatsapp is supported
      this.socialSharing.canShareVia("com.whatsapp", "message", "subject").then(() => {
        // Sharing via com.whatsapp is possible
        // Share via email
          this.socialSharing.shareViaWhatsApp("message", "image", "url").then(() => {
            // Success!
          }).catch(() => {
            // Error!
          });

      }).catch(() => {
        // Sharing via com.whatsapp is not possible
      });

    //shareViaWhatsApp(message, image, url)
  }

  followUsClickFB  (arg) {
  	alert(arg);
  	 window.open('fb://page/MugalkhodJidagaMath/', '_system', 'location=no');
  	//window.open('https://www.facebook.com/1401408870089080', '_system');
  	//https://stackoverflow.com/questions/4191492/launch-facebook-app-from-other-app
  }
  
}
