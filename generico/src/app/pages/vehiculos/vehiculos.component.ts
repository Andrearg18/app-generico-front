import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { Vehiculo } from '../../models/vehiculo';
import { VehiculosService } from '../../services/vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  standalone: false,
  templateUrl: './vehiculos.component.html',
  styleUrl: './vehiculos.component.sass'
})
export class VehiculosComponent implements OnInit {
  vehiculosList: Vehiculo[] = []
  loading = true
  
  constructor(
    private _navigationService: NavigationService,
    private _vehiculosService: VehiculosService
  ) { }

  ngOnInit() {
    this._readVehiculos()
  }

  goToHome() {
    this._navigationService.goToHome()
  }

  goBack() {
    this._navigationService.goBack()
  }

  goToVehiculoDetail(code: string) {
    this._navigationService.goToVehiculoDetail(code)
  }

  private _readVehiculos() {
    this.vehiculosList = this._vehiculosService.getVehiculosList()
    this.loading = false
  }
}
