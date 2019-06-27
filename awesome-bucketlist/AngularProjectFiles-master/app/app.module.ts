import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { ListService } from './services/list.service';
import { ViewListComponent } from './view-list/view-list.component';
import { AddListComponent } from './add-list/add-list.component';

@NgModule({
  imports: [BrowserModule,FormsModule,HttpModule],
  declarations: [AppComponent,ViewListComponent,AddListComponent],
  bootstrap: [AppComponent],
  providers:[ListService]
})

export class AppModule {
}
