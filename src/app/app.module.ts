import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './layouts/landing-page/landing-page.component';
import { BlogCardComponent } from './modules/blog-card/blog-card.component';
import { SingleBlogComponent } from './modules/single-blog/single-blog.component';
import { CouchesComponent } from './modules/couches/couches.component';
import {LandingPageModule} from './layouts/landing-page/landing-page.module';
import {SharedModule} from './shared/shared.module';
import { ContactComponent } from './modules/contact/contact.component';
import { WelcomeBannerComponent } from './modules/welcome-banner/welcome-banner.component';
import { SiteAboutComponent } from './modules/site-about/site-about.component';
import {FormsModule} from '@angular/forms';
import { SignUpComponent } from './modules/auth/sign-up/sign-up.component';
import { SignInComponent } from './modules/auth/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BlogCardComponent,
    SingleBlogComponent,
    CouchesComponent,
    ContactComponent,
    WelcomeBannerComponent,
    SiteAboutComponent,
    SignUpComponent,
    SignInComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LandingPageModule,
        SharedModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
