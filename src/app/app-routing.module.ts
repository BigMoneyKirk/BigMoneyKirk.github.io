import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './main-content/home/home.component';
import { AboutComponent } from './main-content/about/about.component';
import { BibleComponent } from './main-content/bible/bible.component';
import { BestBuddiesComponent } from './other-sites/best-buddies/best-buddies.component';
import { InteriorDesingComponent } from './other-sites/interior-desing/interior-desing.component';
import { TishasCakesComponent } from './other-sites/tishas-cakes/tishas-cakes.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'best-buddies', component: BestBuddiesComponent },
  { path: 'bible', component: BibleComponent },
  { path: 'home', component: HomeComponent },
  { path: 'interior-design', component: InteriorDesingComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'tishas-cupcakes', component: TishasCakesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
