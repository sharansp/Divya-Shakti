import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';


var audio = new Audio('/assets/audio/guru-brahma.mp3');
audio.play();

//Audio playing in the background
/*var audio = new Audio('/assets/audio/guru-brahma.mp3');
	this.audio = audio;

var playAudio = function(){
  	this.audio.play();
} 
this.playAudio = playAudio;

var pauseAudio = function(){
  	this.audio.pause();
} 
this.pauseAudio = pauseAudio;

this.task = setInterval(() => {
	this.playAudio();
}, 33000);*/


platformBrowserDynamic().bootstrapModule(AppModule);