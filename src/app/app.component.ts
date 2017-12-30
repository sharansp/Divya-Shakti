import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, AlertController  } from 'ionic-angular';
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
import { BlogsPage } from '../pages/blogs/blogs';
import { BlogsDataPage } from '../pages/blogsdata/blogsdata';
import { SankalpaYatrePage } from '../pages/sankalpa-yatre/sankalpa-yatre';
import { HowToReachPage } from '../pages/how2reach/how2reach';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;
    showedAlert: boolean;




  constructor( private alertCtrl: AlertController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.showedAlert = true;

     platform.registerBackButtonAction(() => {

         //console.log(this.navCtrl);
         //console.log(this.navCtrl.id);
         //console.log(this.navCtrl._ids);
         //console.log(this.navCtrl.getActive().component.name);
         //console.log(this.navCtrl.getActive());
         //console.log(this.navCtrl.getActive().instance);
         // console.log(Object.keys(this.navCtrl.getActive().instance));
         // console.log(Object.keys(this.navCtrl.getActive().));
        
         var that = this;
          let alert = 

          this.alertCtrl.create({
            title: 'Alert',
            message: 'Are you sure you want to exit?',
            enableBackdropDismiss:false,
            buttons: [
            {
                text: 'Yes',
                handler: () => {
                  console.log('Ok clicked');
                  platform.exitApp();
                }
              },
             // 'Dismiss',
              {
                text: 'Cancel',
                role: 'cancel',
                //cssClass:'boldAlert',
                // name: 'button-positive',
                handler: () => {
                  console.log('Cancel clicked');
                  that.showedAlert = true;
                  // let _homePage = this.navCtrl.getActive().component.name.toString().toLowerCase();
                  // if(_homePage.includes('homepage')){
                  //      return;
                  // }
                  // this.navCtrl.setRoot(HomePage);
                }
              }
              
            ]
          });
        //}
        // else{
        //   this.showedAlert = false;
        // }
       // }

         /*alert.onDidDismiss(function(evt){

           console.log(that.showedAlert);
           // console.log(that);
           that.showedAlert = true;
         });*/

          let view = this.navCtrl.getActive(); 
          if ( view.instance instanceof HomePage ){
            
            console.log(this.showedAlert);
            if (this.showedAlert) {
              alert.present();
              this.showedAlert = false;
            }else{
              alert.dismiss();
              //this.showedAlert = true;
            }
            
          }
          else if(view.instance instanceof EventsPage){
            this.navCtrl.setRoot(HomePage);
          }else if(view.instance instanceof MuttsAshramaPage){
            this.navCtrl.setRoot(HomePage);
          }else if(view.instance instanceof AbhishekSevaPage){
            this.navCtrl.setRoot(HomePage);
          }else if(view.instance instanceof ContactsPage){
            this.navCtrl.setRoot(HomePage);
          }else if(view.instance instanceof GalleryPage){
            this.navCtrl.setRoot(HomePage);
          }else if(view.instance instanceof JagadgurusPage){
            this.navCtrl.setRoot(HomePage);
          }else if(view.instance instanceof SankalpaYatrePage){
            this.navCtrl.setRoot(HomePage);
          }else if(view.instance instanceof HowToReachPage){
            this.navCtrl.setRoot(HomePage);
          }else if(view.instance instanceof BlogsPage){
            this.navCtrl.setRoot(HomePage);
          }else if(view.instance instanceof SriMurugharajendraAppajiPage){
            this.navCtrl.setRoot(JagadgurusPage);
          }else if(view.instance instanceof SriSiddarameshwaraAppajiPage){
            this.navCtrl.setRoot(JagadgurusPage);
          }else if(view.instance instanceof SriYallalingAppajiPage){
            this.navCtrl.setRoot(JagadgurusPage);
          }else if(view.instance instanceof SriSiddalingaAppajiPage){
            this.navCtrl.setRoot(JagadgurusPage);
          }else if(view.instance instanceof AboutGuruPage){
            this.navCtrl.setRoot(JagadgurusPage);
          }else if(view.instance instanceof BlogsDataPage){
            this.navCtrl.setRoot(BlogsPage);
          }
          
        })
      

      /*this.showedAlert = false;
                      // Confirm exit
        platform.registerBackButtonAction(() => {
          console.log(this.navCtrl.length() )
            if (this.navCtrl.length() == 1) {
              console.log(this.navCtrl);
                if (!this.showedAlert) {
                  console.log(this.navCtrl.getActive().component.name);
                  if(this.navCtrl.getActive().component.name=='HomePage'){
                      //alert(this.navCtrl.getActive().component.name);
                       platform.exitApp();
                  }
                  // else if(this.navCtrl.getActive().component.name!='HomePage'){
                  //     this.navCtrl.setRoot(HomePage);
                  //     this.navCtrl.popToRoot();
                  // }
                  else{
                    //alert(this.navCtrl.getActive().component.name);
                      this.navCtrl.setRoot(HomePage);
                  }
                } else {
                    this.showedAlert = false;
                    //confirmAlert.dismiss();
                }
            }
            else{
                this.navCtrl.pop();  
            }
            
        });*/


    });
  }
  
  goToJagadgurus(params){
    if (!params) params = {};
    this.navCtrl.setRoot(JagadgurusPage);
  }goToSankalpaYatre(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SankalpaYatrePage);
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
  }goToBlogs(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BlogsPage);
  }goToHowToReach(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HowToReachPage);
  }
}
