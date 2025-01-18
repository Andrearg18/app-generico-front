import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosComponent } from './vehiculos.component';
import { MatIconModule } from '@angular/material/icon';
import { ItemsModule } from '../../components/items/items.module';


const ANGULAR_MATERIAL = [
  MatIconModule,
  // MatTooltipModule,
]


@NgModule({
  declarations: [
    VehiculosComponent,
  ],
  imports: [
    ANGULAR_MATERIAL,
    CommonModule,
    ItemsModule
  ]
})
export class VehiculosModule { }
