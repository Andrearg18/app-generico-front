import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { Vehiculo } from '../../models/vehiculo';
import { VehiculosService } from '../../services/vehiculos.service';
import { MatDialog } from '@angular/material/dialog';
import { FiltersVehiculoComponent } from '../../components/filters/filters-vehiculo/filters-vehiculo.component';
import { Filter } from '../../services/vehiculos-filters.service';

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
    private _vehiculosService: VehiculosService,
    private _dialogFilters: MatDialog,
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

  openFilterPopup(): void {
    const dialogRef = this._dialogFilters.open(FiltersVehiculoComponent, {
      width: '450px',
      disableClose: true,
      autoFocus: true,
      panelClass: 'static-size-dialog',
    })

    dialogRef.afterClosed().subscribe(filters => {
      if(filters) {
        this._applyFilters(filters)
      }
    }) 
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

  private _applyFilters(filters: Filter[]): void {
    console.log(filters)
  }
}
