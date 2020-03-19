import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { HomeComponent } from './main-content/home/home.component';
import { AboutComponent } from './main-content/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { NavbarModule, WavesModule, MDBBootstrapModule  } from 'angular-bootstrap-md';
import { BibleComponent } from './main-content/bible/bible.component';
import { BestBuddiesComponent } from './other-sites/best-buddies/best-buddies.component';
import { InteriorDesingComponent } from './other-sites/interior-desing/interior-desing.component';
import { TishasCakesComponent } from './other-sites/tishas-cakes/tishas-cakes.component';
import { JournalComponent } from './other-sites/journal/journal.component';
import { SocialMediaComponent } from './other-sites/social-media/social-media.component';
import { BookmarksComponent } from './other-sites/bookmarks/bookmarks.component';
import { PassionsComponent } from './other-sites/passions/passions.component';
import { SettingsComponent } from './other-sites/settings/settings.component';
import { KeatylinsBeautyComponent } from './other-sites/keatylins-beauty/keatylins-beauty.component';
import { SandrasRecordKeepingComponent } from './other-sites/sandras-record-keeping/sandras-record-keeping.component';
import { SadesFruitComponent } from './other-sites/sades-fruit/sades-fruit.component';
import { UnderConstructionComponent } from './other-sites/under-construction/under-construction.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { NewEntryComponent } from './other-sites/journal/new-entry/new-entry.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule, MatSelectModule } from '@angular/material';
import { HeatherMaryKayComponent } from './other-sites/heather-mary-kay/heather-mary-kay.component';
import { KirklandLoanComponent } from './other-sites/kirkland-loan/kirkland-loan.component';
import { BunnieBeauteComponent } from './other-sites/bunnie-beaute/bunnie-beaute.component';
import { KevinsVisionComponent } from './other-sites/kevins-vision/kevins-vision.component';
import { SmartHouseComponent } from './other-sites/smart-house/smart-house.component';
import { BlogComponent } from './main-content/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainNavbarComponent,
    HomeComponent,
    AboutComponent,
    LoadingSpinnerComponent,
    BibleComponent,
    BestBuddiesComponent,
    InteriorDesingComponent,
    TishasCakesComponent,
    JournalComponent,
    SocialMediaComponent,
    BookmarksComponent,
    PassionsComponent,
    SettingsComponent,
    KeatylinsBeautyComponent,
    SandrasRecordKeepingComponent,
    SadesFruitComponent,
    UnderConstructionComponent,
    NewEntryComponent,
    HeatherMaryKayComponent,
    KirklandLoanComponent,
    BunnieBeauteComponent,
    KevinsVisionComponent,
    SmartHouseComponent,
    BlogComponent
  ],
  entryComponents: [
    NewEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavbarModule,
    WavesModule,
    MDBBootstrapModule.forRoot(),
    NgxSmartModalModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule,
    MatSelectModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
