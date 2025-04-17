import { Component, NgModule } from '@angular/core';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShadowdomExampleComponent } from './shadowdom-example/shadowdom-example.component';
import { MenucardComponent } from './menucard/menucard.component';  
import { SlideShowComponent } from './slide-show/slide-show.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { LearnABCDComponent } from './learn-abcd/learn-abcd.component';
import { DefaultPageComponent } from './default-page/default-page.component';

import { HomeComponent } from './home/home.component';
import { ShadowdomExampleComponent } from './shadowdom-example/shadowdom-example.component';
import { MenucardComponent } from './menucard/menucard.component';  
import { SlideShowComponent } from './slide-show/slide-show.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { LearnABCDComponent } from './learn-abcd/learn-abcd.component';
import { QuoteApiCallComponent } from './quote-api-call/quote-api-call.component';
import { DefaultPageComponent } from './default-page/default-page.component';



const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"menuCard",component:MenucardComponent},
  {path:"shadowDomExample", component:ShadowdomExampleComponent},
  {path:"slideShow", component: SlideShowComponent},
  {path:"breakfast",component:BreakfastComponent},
  {path:"lunch", component:LunchComponent},
  {path:"dinner", component: DinnerComponent},
  {path:"learnABCD", component: LearnABCDComponent},
  {path:"", component:DefaultPageComponent}
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"menuCard",component:MenucardComponent},
  {path:"shadowDomExample", component:ShadowdomExampleComponent},
  {path:"slideShow", component: SlideShowComponent},
  {path:"breakfast",component:BreakfastComponent},
  {path:"lunch", component:LunchComponent},
  {path:"dinner", component: DinnerComponent},
  {path:"learnABCD", component: LearnABCDComponent},
  {path:"QuoteApiCall", component: QuoteApiCallComponent},
  {path:"", component:DefaultPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

