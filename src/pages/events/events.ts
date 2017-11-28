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
			
			"Description": "33rd Guruvandana Program",
			"Place": "Mugalkhod",
			"Date": "December 2",
			"Time": "Evening 6 - 9 PM"
		},
		{
			
			"Description": "Poornima & Cardinally Ceremony Pujya Shri Yallalinga Appaji",
			"Place": "Mugalkhod",
			"Date": "January 2",
			"Time": ""
		},
		{
			
			"Description": "Pada yatre from Koligud to Mugalkhod",
			"Place": "Mugalkhod",
			"Date": "January 12",
			"Time": ""
		},
		{
			
			"Description": "774- Jangamara Pada Pooje & Swamy Vivekananda Jayathi",
			"Place": "Mugalkhod",
			"Date": "January 13",
			"Time": ""
		},
		{
			
			"Description": "Anubhava Mantapa Loka arpanna & Pushpa arpane",
			"Place": "Mugalkhod",
			"Date": "January 14",
			"Time": ""
		},
		{
			
			"Description": "Amavasya, Pujya Appaji in Mugalkhod",
			"Place": "Mugalkhod",
			"Date": "January 16",
			"Time": ""
		},
		{
			
			"Description": "Poornima  Pujya Appaji in Jidga",
			"Place": "Jidaga",
			"Date": "January 31",
			"Time": ""
		},
		{
			
			"Description": "Sri Sadalshri Siddhrameshwara Punya Aradhyane & Pushparpane",
			"Place": "",
			"Date": "Feb 02 - 06th",
			"Time": ""
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
 
  showEventToggle(evt){
  	var oTable = document.getElementById('idTable');
  	var oList = document.getElementById('idListView');
  	var oBtnToggle= document.getElementById('idButtonToggle');

  	/*if(!oTable.hidden){
  		oBtnToggle.textContent = "Show Events List";
  	}else{
  		oBtnToggle.textContent = "Show Events Table";
  	}*/

  	oTable.hidden = !oTable.hidden;
  	oList.hidden = !oList.hidden;
  }

}
