import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './routs/app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module"
import { AppStoreModule } from "./store/app.store.module";

import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { MessageModule } from 'primeng/message';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule,
        AppStoreModule,
      MessageModule,
      ButtonModule,
      RippleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
