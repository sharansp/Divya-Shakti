import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SriSiddalingaAppajiPage } from '../sri-siddalinga-appaji/sri-siddalinga-appaji';
import { SriYallalingAppajiPage } from '../sri-yallaling-appaji/sri-yallaling-appaji';
import { SriSiddarameshwaraAppajiPage } from '../sri-siddarameshwara-appaji/sri-siddarameshwara-appaji';
import { SriMurugharajendraAppajiPage } from '../sri-murugharajendra-appaji/sri-murugharajendra-appaji';
import { AboutGuruPage } from '../about-guru/about-guru';

@Component({
  selector: 'page-jagadgurus',
  templateUrl: 'jagadgurus.html'
})
export class JagadgurusPage {

  constructor(public navCtrl: NavController) {
  }
  goToSriSiddalingaAppaji(params){
    if (!params) params = {};
    this.navCtrl.push(SriSiddalingaAppajiPage);
  }goToSriYallalingAppaji(params){
    if (!params) params = {};
    this.navCtrl.push(SriYallalingAppajiPage);
  }goToSriSiddarameshwaraAppaji(params){
    if (!params) params = {};
    this.navCtrl.push(SriSiddarameshwaraAppajiPage);
  }goToSriMurugharajendraAppaji(params){
    if (!params) params = {};
    this.navCtrl.push(SriMurugharajendraAppajiPage);
  }goToAboutGuru(params){
    if (!params) params = {};
    this.navCtrl.push(AboutGuruPage);
  }
}
