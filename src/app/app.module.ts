import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoreModule } from './features/core/core.module';
import { DealsModule } from './features/deals/deals.module';

import { HomeModule } from './pages/home/home.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    
    CoreModule,
    DealsModule,

    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
