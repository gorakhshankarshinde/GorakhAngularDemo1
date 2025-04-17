import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenucardComponent } from './menucard/menucard.component';
import { ShadowdomExampleComponent } from './shadowdom-example/shadowdom-example.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { ChildComponent } from './child/child.component';
import { LearnABCDComponent } from './learn-abcd/learn-abcd.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    LoginComponent,
    HomeComponent,
    MenucardComponent,
    ShadowdomExampleComponent,
    SlideShowComponent,
    DefaultPageComponent,
    BreakfastComponent,
    LunchComponent,
    DinnerComponent,
    ChildComponent,
    LearnABCDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
