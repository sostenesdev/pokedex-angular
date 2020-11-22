import { PokeapiService } from './services/pokeapi.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './views/list/list.component';
import { FormsModule } from '@angular/forms';
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PokeapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
