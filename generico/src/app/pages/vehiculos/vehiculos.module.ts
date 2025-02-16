import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosComponent } from './vehiculos.component';
import { MatIconModule } from '@angular/material/icon';
import { ItemsModule } from '../../components/items/items.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';


const ANGULAR_MATERIAL = [
  MatIconModule,
  MatProgressSpinnerModule
  // MatTooltipModule,
]


@NgModule({
  declarations: [
    VehiculosComponent,
  ],
  imports: [
    ANGULAR_MATERIAL,
    CommonModule,
    ItemsModule,
    FormsModule
  ]
})
export class VehiculosModule { }
