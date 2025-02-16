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
  vehiculosFiltered: Vehiculo[] = []
  loading = true
  searchText!: string
  
  constructor(
    private _navigationService: NavigationService,
    private _vehiculosService: VehiculosService
  ) { }

  ngOnInit(): void {
    this._readVehiculos()
  }

  goToHome(): void {
    this._navigationService.goToHome()
  }

  goBack(): void {
    this._navigationService.goBack()
  }

  search(filter?: any): void {
    this.loading = true
    if(filter) {
      this.loading = false
    } else {
      this.vehiculosFiltered = this.searchText 
      ? this.vehiculosList.filter(vehiculo => 
        vehiculo.titulo.toUpperCase().includes(this.searchText.toUpperCase())
        || vehiculo.descripcion.toUpperCase().includes(this.searchText.toUpperCase())
      )
      : this.vehiculosList
    }
    this.loading = false
  }

  goToVehiculoDetail(code: string): void {
    this._navigationService.goToVehiculoDetail(code)
  }

  private _readVehiculos() {
    this.vehiculosList = this._vehiculosService.getVehiculosList()
    this.vehiculosFiltered = this.vehiculosList
    if (this.searchText) {
      this.search()
    } else {
      this.loading = false
    }
  }
}
