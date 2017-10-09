import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "angularfire2";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaCarroPage } from '../pages/lista-carro/lista-carro';

import { EditaCarroPage } from '../pages/edita-carro/edita-carro';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyALzRevEI3fhTbQVli_X7GqthiJJuexRlE",
  authDomain: "edfisica-75c4e.firebaseapp.com",
  databaseURL: "https://edfisica-75c4e.firebaseio.com",
  projectId: "edfisica-75c4e",
  storageBucket: "edfisica-75c4e.appspot.com",
  messagingSenderId: "986954343093"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaCarroPage,
    EditaCarroPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
   
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaCarroPage,
    EditaCarroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
