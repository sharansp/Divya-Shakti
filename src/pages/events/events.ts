import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
	data;
  constructor(public navCtrl: NavController) {
  	this.initializeItems();

  }

  initializeItems(){

  	this.data =  [
		{
			
			"Description": "ಗುರುಪೂರ್ಣಿಮಾ ಕಾರ್ಯಕ್ರಮ ದಿ. 09-07-2017 ರಂದು",
			"Place": "Belgaum",
			"Date_Month": "JUL",
			"Date_Day": "9"
		},{
			
			"Description": "ಅಗ್ಗಿ ಜಾತ್ರಾ ಮಹೋತ್ಸವ ಸುಕ್ಷೇತ್ರ ಮುಕ್ತಿ ಮಂದಿರ ಮುಗಳಖೋಡದಲ್ಲಿ",
			"Place": "Mugalkhod",
			"Date_Month": "APR",
			"Date_Day": "4"
		},{
			
			"Description": "ಶ್ರೀ ಷಡಕ್ಷರಿ ಶಿವಯೋಗಿ ಸಿದ್ಧರಾಮೇಶ್ವರ ಮಹಾಸ್ವಾಮಿಗಳವರ 13ನೇ ಪುಣ್ಯಾರಾಧನ",
			"Place": "Mugalkhod",
			"Date_Month": "FEB",
			"Date_Day": "13"
		},{
			
			"Description": "ಸದ್ಗುರು ಶ್ರೀ ಯಲ್ಲಾಲಿಂಗ ಮಹಾಪ್ರಭುಗಳ 31ನೇ ಪುಣ್ಯಾರಾಧನೆ ದಿ.12-1-2017",
			"Place": "Mugalkhod",
			"Date_Month": "JAN",
			"Date_Day": "12"
		}
			]
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.data = this.data.filter((item) => {

        return ((item['Place'].toLowerCase().indexOf(val.toLowerCase()) > -1) || (item['Date_Month'].toLowerCase().indexOf(val.toLowerCase()) > -1));
      })
    }
  }
  
}
