import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

const ANGULAR_MATERIAL = [
  MatIconModule,
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...ANGULAR_MATERIAL,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
