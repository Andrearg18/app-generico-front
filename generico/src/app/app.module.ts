import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.module';
import { ContactModule } from './pages/contact/contact.module';
import { VehiculosModule } from './pages/vehiculos/vehiculos.module';
import { RecambiosModule } from './pages/recambios/recambios.module';
import { VehiculoDetailModule } from './components/vehiculo-detail/vehiculo-detail.module';
import { RecambioDetailModule } from './components/recambio-detail/recambio-detail.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ContactModule,
    VehiculosModule,
    RecambiosModule,
    VehiculoDetailModule,
    RecambioDetailModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
