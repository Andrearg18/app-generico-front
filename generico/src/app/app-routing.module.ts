import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { RecambiosComponent } from './pages/recambios/recambios.component';
import { VehiculoDetailComponent } from './components/vehiculo-detail/vehiculo-detail.component';
import { RecambioDetailComponent } from './components/recambio-detail/recambio-detail.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: HomeComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'vehiculos', component: VehiculosComponent},
  {path: 'vehiculo:id', component: VehiculoDetailComponent},
  {path: 'recambios', component: RecambiosComponent},
  {path: 'recambio:id', component: RecambioDetailComponent},
  {path: '**', redirectTo: 'inicio'},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
