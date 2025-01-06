import { Injectable } from '@angular/core';
import { Vehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor() { }

  public getVehiculosList(): Vehiculo[] {
    //Leer fichero shared/data-list/vehiculos-list
    
    return []
  }

  public getVehiculoDetail(code: string): Vehiculo {
    //Leer fichero shared/data-list/vehiculos-list
    //Buscar el vehiculo por code
    
    return []
  }

  public updateVehiculo(code: string): boolean {
    //Leer fichero shared/data-list/vehiculos-list
    //Buscar el vehiculo por code
    //Actualizar fichero - guardar
    
    return true
  }

  public deleteVehiculo(code: string): boolean {
    //Leer fichero shared/data-list/vehiculos-list
    //Buscar el vehiculo por code
    //Actualizar fichero - guardar
    
    return true
  }
}
