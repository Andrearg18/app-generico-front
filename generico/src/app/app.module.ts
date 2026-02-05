import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.module';
import { VehiculosModule } from './pages/vehiculos/vehiculos.module';
import { RecambiosModule } from './pages/recambios/recambios.module';
import { VehiculoDetailModule } from './components/vehiculo-detail/vehiculo-detail.module';
import { RecambioDetailModule } from './components/recambio-detail/recambio-detail.module';
import { FiltersVehiculoComponent } from './components/filters/filters-vehiculo/filters-vehiculo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from './components/footer/footer.component';
import { ContactModule } from './pages/contact/contact.module';

const ANGULAR_MATEIRAL = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule
]

@NgModule({
  declarations: [
    AppComponent,
    FiltersVehiculoComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    // ContactModule,
    // VehiculosModule,
    // RecambiosModule,
    // VehiculoDetailModule,
    // RecambioDetailModule,
    // ReactiveFormsModule,
    ANGULAR_MATEIRAL,
  ],
  exports: [FooterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
