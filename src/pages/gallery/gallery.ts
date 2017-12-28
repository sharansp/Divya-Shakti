import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {
	//VideoObj;
	data;
	 gallery: string = "photos";

  constructor(public navCtrl: NavController) {

  	this.data =  [
		{
			
			"Title": "ಪ ಪೂ ಶ್ರೀ ಷ ಶಿ ಡಾ ಮುರುಘರಾಜೇಂದ್ರ",
			"Link": "https://lh3.googleusercontent.com/-jpQrN6xtC5k/WiZr8PGokvI/AAAAAAAAAfk/HPyuErTgRdkbl-FjNIG-DKsIuO2mzup9ACL0BGAYYCw/h785/2017-12-05.jpg"
		},{
			
			"Title": "ಪ ಪೂ ಶ್ರೀ ಷ ಶಿ ಡಾ ಮುರುಘರಾಜೇಂದ್ರ",
			"Link": "https://lh3.googleusercontent.com/-BJT8wUKaMk0/WiZq_3M8hCI/AAAAAAAAAfY/Gr574vYcqrkQGgcFS3BKWFxWKbtZRjKWwCL0BGAYYCw/h692/2017-12-05.jpg"
		}
			];
	  }

	  
	  onPressPhoto(){
	  	var oVideoGrid = document.getElementById('idListViewVideo');
	  	oVideoGrid.hidden = true;
	  }

	  onPressMusic(){
	  	//var oVideoGrid = document.getElementById('idListViewVideo');
	  	//oVideoGrid.hidden = true;
	  }

	  onPressVideos(evt){
	  	var oVideoGrid = document.getElementById('idListViewVideo');
	  	oVideoGrid.hidden = false;
	  	//var oBtnToggle= document.getElementById('idButtonToggle');

	  	/*if(!oTable.hidden){
	  		oBtnToggle.textContent = "Show Events List";
	  	}else{
	  		oBtnToggle.textContent = "Show Events Table";
	  	}*/
	  }

	/*  returnLink(){
			
		}*/
  
}
