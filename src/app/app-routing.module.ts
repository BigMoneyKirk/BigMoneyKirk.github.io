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

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'best-buddies', component: BestBuddiesComponent },
  { path: 'bible', component: BibleComponent },
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'bunnie-beaute', component: BunnieBeauteComponent },
  { path: 'heather-mary-kay', component: HeatherMaryKayComponent },
  { path: 'home', component: HomeComponent },
  { path: 'interior-design', component: InteriorDesingComponent },
  { path: 'journal', component: JournalComponent },
  { path: 'keatylins-beauty', component: KeatylinsBeautyComponent},
  { path: 'kirkland-loan', component: KirklandLoanComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'passions', component: PassionsComponent },
  { path: 'sandras-record-keeping', component: SandrasRecordKeepingComponent},
  { path: 'settings', component: SettingsComponent },
  { path: 'social-media', component: SocialMediaComponent },
  { path: 'the-fruit-plug', component: SadesFruitComponent },
  { path: 'tishas-cupcakes', component: TishasCakesComponent },
  { path: 'under-construction', component: UnderConstructionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
