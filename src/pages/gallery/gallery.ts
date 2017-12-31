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
			
			"Title": "ಪ್ರಧಾನ ಮಂತ್ರೀಗಳಾದ ಸನ್ಮಾನ್ಯ ಶ್ರೀ ನರೇಂದ್ರ ಮೋದಿಜಿ ಅವರೊಂದಿಗೆ",
			"Link": "https://lh3.googleusercontent.com/-t14pDqmO330/WkVty-dslXI/AAAAAAAAAjI/GAMX77_63JcMTKo-GsGRakyW_45lPETdwCL0BGAYYCw/h489/2017-12-28.jpg"
		},{
			
			"Title": "",
			"Link": "https://lh3.googleusercontent.com/-DYlCSUd09gU/WkVtzjaKxMI/AAAAAAAAAjI/aDeElQkvYesd6UcKKQvUqbiG-ruvTiTzACL0BGAYYCw/h689/2017-12-28.jpg"
		},{
			
			"Title": "Sri Guruji with Pujya Ravishankar Guruji",
			"Link": "https://lh3.googleusercontent.com/-Sba1fCDW28E/WkVtr9-UYGI/AAAAAAAAAjI/5zNTaOD2CnE8HJ6H4LWSY8jDTSY-m_TwACL0BGAYYCw/h718/2017-12-28.jpg"
		},{
			
			"Title": "",
			"Link": "https://lh3.googleusercontent.com/-U6VppAEmk0g/WkVtwfPUmEI/AAAAAAAAAjI/coMRYBpzKdE5_j27SZL2S4uDar6TZV-wgCL0BGAYYCw/h600/2017-12-28.jpg"
		},{
			
			"Title": "ಯೋಗ ಗುರು ಶ್ರೀ ರಾಮದೇವ ಬಾಬಾ ಅವರೊಂದಿಗೆ",
			"Link": "https://lh3.googleusercontent.com/-K8AO9BM6qOo/WkVt5AzimyI/AAAAAAAAAjI/oCqOEj66QekJBwKOPRWQu11fnfV3P92kQCL0BGAYYCw/h497/2017-12-28.jpg"
		},{
			
			"Title": "",
			"Link": "https://lh3.googleusercontent.com/-BIFHo3MgGbQ/WkVzCZbMwNI/AAAAAAAAAjU/4Xg1etndoXAbfDnB5dcXuguwPu-pMRX6wCL0BGAYYCw/h555/2017-12-28.jpg"
		},{
			
			"Title": "With B. S. Yeddyurappa",
			"Link": "https://lh3.googleusercontent.com/-4iK80f0k160/WkVzqFpzQTI/AAAAAAAAAjc/S8oTediZOK4EYmRvzpEpJyf1reQB7UoagCL0BGAYYCw/h637/2017-12-28.jpg"
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
	  }

	  /*ionViewDidLoad(e){
	  	debugger;
	  }
	  ionViewWillUnload(e){
	  	debugger;
	  }
	  ionViewDidLeave(e){
	  	debugger;
	  }
	  ionViewWillLeave(e){
	  	debugger;
	  }
	  ionViewWillEnter() {
	  	debugger
	  }*/

	  doInfinite(infiniteScroll) {
	    console.log('Begin async operation');

	    setTimeout(() => {
	      for (let i = 0; i < 3; i++) {
	        this.data.push( this.data.length );
	      }

	      console.log('Async operation has ended');
	      infiniteScroll.complete();
	    }, 500);
	  }


  
}
