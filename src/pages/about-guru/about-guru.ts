import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about-guru',
  templateUrl: 'about-guru.html'
})
export class AboutGuruPage {
public firstParam;
  public secondParam;

  constructor(public navCtrl: NavController) {
  }
  
}
