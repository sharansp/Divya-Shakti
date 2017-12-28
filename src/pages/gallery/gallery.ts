import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {
	//VideoObj;

	 gallery: string = "photos";

  constructor(public navCtrl: NavController) {

  	/*this.VideoObj =  [
		{
			
			"Title": "ಪ ಪೂ ಶ್ರೀ ಷ ಶಿ ಡಾ ಮುರುಘರಾಜೇಂದ್ರ",
			"Link": "https://www.youtube.com/embed/0mDU68mIwYY?rel=0&amp;showinfo=0?modestbranding=1"
		},{
			
			"Title": "ಪ ಪೂ ಶ್ರೀ ಷ ಶಿ ಡಾ ಮುರುಘರಾಜೇಂದ್ರ",
			"Link": "https://www.youtube.com/embed/0mDU68mIwYY?rel=0&amp;showinfo=0?modestbranding=1"
		}
			];*/
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
