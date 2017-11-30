import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
	data;
	Kannada;
	English;
  constructor(public navCtrl: NavController) {
  	this.initializeItems();

  }

  initializeItems(){

  	this.Kannada =  [
		{
			
			"Description": "ಪ ಪೂ ಶ್ರೀ ಷ ಶಿ ಡಾ ಮುರುಘರಾಜೇಂದ್ರ ಮಹಾಸ್ವಾಮಿಗಳವರ  ",
			"SubDesc": "33ನೇ ಗುರುವಂದನ",
			"Place": "Mugalkhod",
			"Date": "December 2",
			"Time": ""
		},
		{
			
			"Description": "ಪೂರ್ಣಿಮಾ ಮತ್ತು ತೊಟ್ಟಿಲು ಸಮಾರಂಭ ಪೂಜಾ ",
			"SubDesc": " ಶ್ರೀ ಯಲ್ಲಲಿಂಗ ಅಪಾಜಿ ",
			"Place": "Mugalkhod",
			"Date": "ಜನೆವರಿ 2",
			"Time": ""
		},
		{
			
			"Description": "ಸದ್ಗುರು ಶ್ರೀ ಯಲ್ಲಾಲಿಂಗ ಮಹಾಪ್ರಭುಗಳ  ಪುಣ್ಯಾರಾಧನೆ ",
			"SubDesc": "ಮತ್ತು ಶ್ರೀ ಸಿದ್ಧರಾಮೇಶ್ವರ ಸಂಕಲ್ಪದಂತೆ ಅನುಭವ ಮಂಟಪ",
			"Place": "Mugalkhod",
			"Date": "ಜನೆವರಿ  12, 13, 14",
			"Time": ""
		},
		/*{
			
			"Description": "770- Jangamara Pada Pooje & Swamy Vivekananda Jayathi",
			"SubDesc": "33rd Guruvandana Program",
			"Place": "Mugalkhod",
			"Date": "January 13",
			"Time": ""
		},
		{
			
			"Description": "Anubhava Mantapa Loka arpanna & Pushpa arpane",
			"SubDesc": "33rd Guruvandana Program",
			"Place": "Mugalkhod",
			"Date": "January 14",
			"Time": ""
		},*/
		{
			
			"Description": "Amavasya, Pujya Appaji in Mugalkhod",
			"SubDesc": "",
			"Place": "Mugalkhod",
			"Date": "ಜನೆವರಿ 16",
			"Time": ""
		},
		{
			
			"Description": "Poornima  Pujya Appaji in Jidga",
			"SubDesc": "",
			"Place": "Jidaga",
			"Date": "ಜನೆವರಿ 31",
			"Time": ""
		},
		{
			
			"Description": "ಶ್ರೀ ಷಡಕ್ಷರಿ ಶಿವಯೋಗಿ ಸಿದ್ಧರಾಮೇಶ್ವರ ಮಹಾಸ್ವಾಮಿಗಳವರ  ",
			"SubDesc": " ಪುಣ್ಯಾರಾಧನ",
			"Place": "",
			"Date": "Feb 02 - 06th",
			"Time": ""
		}
			];

  	this.English =  [
		{
			
			"Description": "Param Pujya Shri S S Dr Murugharajendra ",
			"SubDesc": "Mahaswamiji 33rd Guru Vandana Programm",
			"Place": "Mugalkhod",
			"Date": "December 2",
			"Time": "Evening 6 - 9 PM"
		},
		{
			
			"Description": "Poornima & Cardle Ceremony of Pujya ",
			"SubDesc": "Yallalinga Appaji",
			"Place": "Mugalkhod",
			"Date": "January 2",
			"Time": ""
		},
		{
			
			"Description": "Pujya Yallalinga Mahaswamiji Punya Aradhanye & !!",
			"SubDesc": "Shri Siddharameshwara Sankalpa yatre !! koligudda",
			"Place": "Mugalkhod",
			"Date": "January 12, 13, 14",
			"Time": "Shrigala Nade Bhaktara Bhaktiya Kade"
		},
		/*{
			
			"Description": "770- Jangamara Pada Pooje & Swamy Vivekananda Jayathi",
			"SubDesc": "33rd Guruvandana Program",
			"Place": "Mugalkhod",
			"Date": "January 13",
			"Time": ""
		},
		{
			
			"Description": "Anubhava Mantapa Loka arpanna & Pushpa arpane",
			"SubDesc": "33rd Guruvandana Program",
			"Place": "Mugalkhod",
			"Date": "January 14",
			"Time": ""
		},*/
		{
			
			"Description": "Amavasya, Pujya Appaji in Mugalkhod",
			"SubDesc": "",
			"Place": "Mugalkhod",
			"Date": "January 16",
			"Time": ""
		},
		{
			
			"Description": "Poornima  Pujya Appaji in Jidga",
			"SubDesc": "",
			"Place": "Jidaga",
			"Date": "January 31",
			"Time": ""
		},
		{
			
			"Description": "Sri Sadalshri Siddhrameshwara Punya Aradhyane ",
			"SubDesc": " hagu Pushparpane",
			"Place": "",
			"Date": "Feb 02 - 06th",
			"Time": ""
		}
			];

	this.data = this.English;
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.data = this.data.filter((item) => {

        return ((item['Place'].toLowerCase().indexOf(val.toLowerCase()) > -1) || (item['Date'].toLowerCase().indexOf(val.toLowerCase()) > -1));
      })
    }
  }
 
  showEventToggle(evt){
  	var oTable = document.getElementById('idTable');
  	var oList = document.getElementById('idListView');
  	//var oBtnToggle= document.getElementById('idButtonToggle');

  	/*if(!oTable.hidden){
  		oBtnToggle.textContent = "Show Events List";
  	}else{
  		oBtnToggle.textContent = "Show Events Table";
  	}*/

  	oTable.hidden = !oTable.hidden;
  	oList.hidden = !oList.hidden;
  }

  changeEventL10n(value){
 	
  	var oToggle = document.getElementById('idBtnToggle');
  	var val = oToggle.textContent.trim();
  	if(val=='Kannada'){
  		this.data = this.Kannada;
  		oToggle.textContent = 'English';
  	}else if(val=='English'){
  		this.data = this.English;
  		oToggle.textContent = 'Kannada';
  	}
  	

  }

  goToEventsDetail(param){

  }



}
