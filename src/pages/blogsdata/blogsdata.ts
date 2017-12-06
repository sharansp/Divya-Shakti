import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
// import { AboutGuruPage } from '../about-guru/about-guru';

@Component({
  selector: 'page-blogsdata',
  templateUrl: 'blogsdata.html'
})
export class BlogsDataPage {
  public data;
  // public secondParam;
	//blogsdata;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  	 this.data = navParams.get("data");
    // this.secondParam = navParams.get("secondPassed");
	}

	/*goToBlogDetail(bdata){
    if (!bdata) bdata = {};
    this.navCtrl.push(AboutGuruPage,{
      firstPassed: "value 1",
      secondPassed: "value 2"
    });
  }*/

}