import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { itemReducer } from './item-list/store/item.reducer';

@NgModule({
  declarations: [AppComponent, ItemListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ itemList: itemReducer }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
