import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewComponent } from './review/review.component';
import { StarsComponent } from './stars/stars.component';
import { BuyerComponent } from './buyer/buyer.component';

@NgModule({
  declarations: [	
    AppComponent,
    ReviewComponent,
    StarsComponent,
      BuyerComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
