import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdDialogModule } from '@angular/material';

import { CoreModule } from './features/core/core.module';
import { DealsModule } from './features/deals/deals.module';
import { AuthModule } from './features/auth/auth.module';

import { HomeModule } from './pages/home/home.module';
import { DealModule } from './pages/deal/deal.module';

import { AppStateModule } from './state/app-state.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, LoginDialogComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdDialogModule,
    
    AppStateModule,
    AppRoutingModule,
    
    CoreModule,
    DealsModule,
    AuthModule,

    HomeModule,
    DealModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginDialogComponent]
})
export class AppModule { }
