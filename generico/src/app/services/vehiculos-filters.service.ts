import { Injectable } from '@angular/core';
import { VehiculosService } from './vehiculos.service';
import { RecambiosService } from './recambios.service';

export class Filter {
  name?: string;
  selected?: boolean;
}

export class VehiculoFilter {
  tipo?: Filter;
  marca?: Filter;
  km?: Filter;
  color?: Filter;
}

@Injectable({
  providedIn: 'root'
})
export class VehiculosFiltersService {

  // private _filters: Filter[] = []

  private _marcasFilter: string[] = []

  constructor(
    private _vehiculosService: VehiculosService, 
    private _recambiosService: RecambiosService
  ) {
    this._setFilters()
   }

  getMarcasFilter(): string[] {
    return this._marcasFilter
  }

  private _setFilters(): void {
    // this._filters = [
    //   { name: 'tipo' },
    //   { name: 'marca' },
    //   { name: 'tipo' },
    //   { name: 'tipo' },
    // ]

    this._marcasFilter = this._vehiculosService.getVehiculosList()
      .reduce<string[]>((acc, v) => v.marca ? [...acc, v.marca] : acc, [])
  }
}
