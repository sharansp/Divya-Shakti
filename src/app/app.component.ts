import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JagadgurusPage } from '../pages/jagadgurus/jagadgurus';
import { SriSiddalingaAppajiPage } from '../pages/sri-siddalinga-appaji/sri-siddalinga-appaji';
import { SriYallalingAppajiPage } from '../pages/sri-yallaling-appaji/sri-yallaling-appaji';
import { SriSiddarameshwaraAppajiPage } from '../pages/sri-siddarameshwara-appaji/sri-siddarameshwara-appaji';
import { SriMurugharajendraAppajiPage } from '../pages/sri-murugharajendra-appaji/sri-murugharajendra-appaji';
import { AboutGuruPage } from '../pages/about-guru/about-guru';
import { MuttsAshramaPage } from '../pages/mutts-ashrama/mutts-ashrama';
import { EventsPage } from '../pages/events/events';
import { AbhishekSevaPage } from '../pages/abhishek-seva/abhishek-seva';
import { ContactsPage } from '../pages/contacts/contacts';
import { GalleryPage } from '../pages/gallery/gallery';
import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToJagadgurus(params){
    if (!params) params = {};
    this.navCtrl.setRoot(JagadgurusPage);
  }goToSriSiddalingaAppaji(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SriSiddalingaAppajiPage);
  }goToSriYallalingAppaji(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SriYallalingAppajiPage);
  }goToSriSiddarameshwaraAppaji(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SriSiddarameshwaraAppajiPage);
  }goToSriMurugharajendraAppaji(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SriMurugharajendraAppajiPage);
  }goToAboutGuru(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AboutGuruPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToMuttsAshrama(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MuttsAshramaPage);
  }goToEvents(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EventsPage);
  }goToAbhishekSeva(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AbhishekSevaPage);
  }goToContacts(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ContactsPage);
  }goToGallery(params){
    if (!params) params = {};
    this.navCtrl.setRoot(GalleryPage);
  }
}
