import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './main-content/home/home.component';
import { AboutComponent } from './main-content/about/about.component';
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
import { HeatherMaryKayComponent } from './other-sites/heather-mary-kay/heather-mary-kay.component';
import { KirklandLoanComponent } from './other-sites/kirkland-loan/kirkland-loan.component';
import { BunnieBeauteComponent } from './other-sites/bunnie-beaute/bunnie-beaute.component';
import { KevinsVisionComponent } from './other-sites/kevins-vision/kevins-vision.component';
import { SmartHouseComponent } from './other-sites/smart-house/smart-house.component';
import { BlogComponent } from './main-content/blog/blog.component';
import { ScrevenForwardComponent } from './other-sites/screven-forward/screven-forward.component';
import { AuthGuard } from './guards/auth.guard';
import { ContactComponent } from './main-content/contact/contact.component';
import { RecyclingComponent } from './other-sites/recycling/recycling.component';
import { WebsitesComponent } from './other-sites/websites/websites.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'best-buddies', component: BestBuddiesComponent, canActivate: [AuthGuard] },
  { path: 'bible', component: BibleComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'bookmarks', component: BookmarksComponent, canActivate: [AuthGuard] },
  { path: 'bunnie-beaute', component: BunnieBeauteComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'heather-mary-kay', component: HeatherMaryKayComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'interior-design', component: InteriorDesingComponent, canActivate: [AuthGuard] },
  { path: 'journal', component: JournalComponent, canActivate: [AuthGuard] },
  { path: 'keatylins-beauty', component: KeatylinsBeautyComponent, canActivate: [AuthGuard] },
  { path: 'kevins-vision', component: KevinsVisionComponent, canActivate: [AuthGuard] },
  { path: 'kirkland-loan', component: KirklandLoanComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'passions', component: PassionsComponent, canActivate: [AuthGuard] },
  { path: 'recycling', component: RecyclingComponent } ,
  { path: 'sandras-record-keeping', component: SandrasRecordKeepingComponent, canActivate: [AuthGuard] },
  { path: 'screven-forward', component: ScrevenForwardComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'social-media', component: SocialMediaComponent, canActivate: [AuthGuard] },
  { path: 'smart-home', component: SmartHouseComponent, canActivate: [AuthGuard] },
  { path: 'the-fruit-plug', component: SadesFruitComponent, canActivate: [AuthGuard] },
  { path: 'tishas-cupcakes', component: TishasCakesComponent },
  { path: 'under-construction', component: UnderConstructionComponent },
  { path: 'websites', component: WebsitesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
