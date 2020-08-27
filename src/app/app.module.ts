import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ThemeSelComponent } from './theme-sel/theme-sel.component';
import { CountComponent } from './count/count.component';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { CardExampleComponent } from './card-example/card-example.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { PhoneComponent } from './phone/phone.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';


import { StoreButtonComponent } from './card-example/store-button/store-button.component';
import { MatInputModule } from '@angular/material/input';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ThemeSelComponent,
    CountComponent,
    BusinessDetailsComponent,
    CardExampleComponent,
    SignInComponent,
    SignUpComponent,
    PhoneComponent,
    StoreButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
