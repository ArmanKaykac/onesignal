import { Component } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Platform } from '@ionic/angular';
//import {StatusBar} from '@ionic-native/status-bar';
//import {SplashScreen} from '@ionic-native/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})



export class AppComponent {



  oneSignal_app_id:string ="33cdc097-e617-4be5-b86e-a8b1cfa3abd7";
  firebase_id:string = "476382170560";


  constructor(platform: Platform, oneSignal: OneSignal) {

    platform.ready().then(()=>{
      oneSignal.startInit(this.oneSignal_app_id, this.firebase_id);

      oneSignal.inFocusDisplaying(oneSignal.OSInFocusDisplayOption.InAppAlert);
    
    oneSignal.handleNotificationReceived().subscribe((res) => {
      console.log(res);
    });
    
    oneSignal.handleNotificationOpened().subscribe((res) => {
console.log(res);

    });
    
    oneSignal.endInit();
    })

  }
  


}
