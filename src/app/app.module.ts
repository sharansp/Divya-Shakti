import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EventsPage } from '../pages/events/events';
import { JagadgurusPage } from '../pages/jagadgurus/jagadgurus';
//import { BlogsPage } from '../pages/blogs/blogs';
import { HomePage } from '../pages/home/home';
import { BlogsPage } from '../pages/blogs/blogs';
import { BlogsDataPage } from '../pages/blogsdata/blogsdata';
import { MuttsAshramaPage } from '../pages/mutts-ashrama/mutts-ashrama';
//import { Blogs2Page } from '../pages/blogs2/blogs2';
import { GalleryPage } from '../pages/gallery/gallery';
import { AbhishekSevaPage } from '../pages/abhishek-seva/abhishek-seva';
import { ContactsPage } from '../pages/contacts/contacts';
import { SriSiddalingaAppajiPage } from '../pages/sri-siddalinga-appaji/sri-siddalinga-appaji';
import { SriYallalingAppajiPage } from '../pages/sri-yallaling-appaji/sri-yallaling-appaji';
//import { PagePage } from '../pages/page/page';
import { AboutGuruPage } from '../pages/about-guru/about-guru';
import { SriSiddarameshwaraAppajiPage } from '../pages/sri-siddarameshwara-appaji/sri-siddarameshwara-appaji';
import { SriMurugharajendraAppajiPage } from '../pages/sri-murugharajendra-appaji/sri-murugharajendra-appaji';
import { SankalpaYatrePage } from '../pages/sankalpa-yatre/sankalpa-yatre';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
  
    MyApp,
    EventsPage,
    JagadgurusPage,
    HomePage,
    MuttsAshramaPage,
    GalleryPage,
    AbhishekSevaPage,
    ContactsPage,
    SriSiddalingaAppajiPage,
    SriYallalingAppajiPage,
    AboutGuruPage,
    SriSiddarameshwaraAppajiPage,
    SriMurugharajendraAppajiPage,
    SankalpaYatrePage,
    BlogsPage,
    BlogsDataPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  
    MyApp,
    EventsPage,
    JagadgurusPage,
    HomePage,
    MuttsAshramaPage,
    GalleryPage,
    AbhishekSevaPage,
    ContactsPage,
    SriSiddalingaAppajiPage,
    SriYallalingAppajiPage,
    AboutGuruPage,
    SriSiddarameshwaraAppajiPage,
    SriMurugharajendraAppajiPage,
    SankalpaYatrePage,
    BlogsPage,
    BlogsDataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})


export class AppModule {}