import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemVehiculoComponent } from './item-vehiculo/item-vehiculo.component';
import { ItemRecambioComponent } from './item-recambio/item-recambio.component';



@NgModule({
  declarations: [
    ItemVehiculoComponent,
    ItemRecambioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ItemVehiculoComponent,
    ItemRecambioComponent
  ],
})
export class ItemsModule { }
