import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TechniciansPage } from '../pages/technicians/technicians';
//import { SingleTechnicianPageModule } from '../pages/single-technician/single-technician.module';
import { WorkordersPage } from '../pages/workorders/workorders';
import { WorkorderDetailsPageModule } from '../pages/workorder-details/workorder-details.module';
import { ServicePlacesPage } from '../pages/service-places/service-places';

import { TechniciansServiceProvider } from '../providers/technicians-service/technicians-service';
import { SobjectServiceProvider } from '../providers/sobject-service/sobject-service';

import { OAuthServiceProvider } from '../providers/o-auth-service/o-auth-service';
import { WorkordersServiceProvider } from '../providers/workorders-service/workorders-service';
import { ServicePlacesServiceProvider } from '../providers/service-places-service/service-places-service';

// import { Geolocation } from '@ionic-native/geolocation';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TechniciansPage,
    WorkordersPage,
    ServicePlacesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    WorkorderDetailsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TechniciansPage,
    //SingleTechnicianPage,
    WorkordersPage,
    ServicePlacesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TechniciansServiceProvider,
    SobjectServiceProvider,
    OAuthServiceProvider,
    WorkordersServiceProvider,
    ServicePlacesServiceProvider,
  ]
})
export class AppModule {}
