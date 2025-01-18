import { Component, Input } from '@angular/core';
import { Vehiculo } from '../../../models/vehiculo';

@Component({
  selector: 'app-item-vehiculo',
  standalone: false,
  
  templateUrl: './item-vehiculo.component.html',
  styleUrl: '../items.component.sass'
})
export class ItemVehiculoComponent {
  @Input() vehiculo?: Vehiculo

  constructor() { }

}
