import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-abhishek-seva',
  templateUrl: 'abhishek-seva.html'
})
export class AbhishekSevaPage {
	contactsData;

  constructor(public navCtrl: NavController) {

  		this.contactsData =  [
		{
			
			
			"Place": "Mugalkhod OFFICE JIDGA OFFICE Sri Sri Yallalingeshwara Punnyashram, Mukthi Mandir Mutt, At Po. mugalkhod, Tq:Raibagh, Dist. Belgaum-591235.",
			"Contacts": "Shrishail:9845893941",
		},{
			
			
			"Place": "Sri Sri Siddarameshwara Anubhava Ashram, Nava Kallyana Mutt, Sukshetra Jidga, Tq. Aland, Dt. Gulbarga-585302.",
			"Contacts": "Guru:9980032009",
		}
			];

  }
  }
  
}
