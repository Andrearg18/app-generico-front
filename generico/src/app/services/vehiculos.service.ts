import { Injectable } from '@angular/core';
import { Vehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor() { }

  public getVehiculosList(): Vehiculo[] {
    //Leer fichero shared/data-list/vehiculos-list
    
    return this._vehiculosProvisionales()
  }

  public getVehiculoDetail(code: string): Vehiculo {
    //Leer fichero shared/data-list/vehiculos-list
    //Buscar el vehiculo por code
    
    return { code: '0', titulo: '', descripcion: ''}
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

  private _vehiculosProvisionales(): Vehiculo[] {
    return [
      
      { 
        code: '1', 
        marca: 'Seat', 
        modelo: 'Ibiza', 
        modeloTipo: 'II',
        cv: 100, 
        anio: 2004, 
        km: 100000,
        color: 'Rojo', 
        combustible: 'Gasolina', 
        tituloMotor: 'TDI 1.4 16V',
        puertas: 3,
        peso: 1500, 
        titulo: 'Seat Ibiza Rojo, TDI 1.4 de 16V',
        descripcion: 'Tiene un motor TDI 1.4 de 16V - 100cv. Es del año 2004, pero tiene tan solo 100.000 Km. Está en perfecto estado, ITV recién pasada.', 
        precio: 5000, 
        principalFoto: 'seat_ibiza.jpg',
      },
      {
        code: '2', 
        marca: 'Renault', 
        modelo: 'Megane', 
        cv: 165, 
        anio: 2006, 
        km: 90000,
        color: 'Azul', 
        combustible: 'Gasolina', 
        tituloMotor: 'RS 1.9 16V',
        puertas: 5,
        peso: 1900, 
        titulo: 'Renault Megane RS 1.8 16V', 
        descripcion: 'Con un motor 1.9 RS de 16V y 165cv. Es del año 2006, sólo tiene 140.000 Km. ITV recién pasada, filtros y aceite cambiado.', 
        precio: 8000, 
        principalFoto: 'renault_megane.jpg',
      },
      { 
        code: '3', 
        marca: 'Opel', 
        modelo: 'Antara', 
        cv: 120, 
        anio: 2015, 
        km: 120000,
        color: 'Gris', 
        combustible: 'Diésel', 
        tituloMotor: '2.0 8V', 
        titulo: 'Opel Antara 4x4 2.0 de 8V', 
        descripcion: 'Todo terreno con un motor 2.0 de 8V y 120cv. Tracción en las cuatro ruedas. Es del año 2015, tiene 80.000 Km. ITV recién pasada.', 
        precio: 10000, 
        principalFoto: 'opel_antara.jpg',
      },
      { 
        code: '4', 
        marca: 'Seat', 
        modelo: 'Ibiza', 
        modeloTipo: 'II',
        cv: 100, 
        anio: 2004, 
        km: 100000,
        color: 'Rojo', 
        combustible: 'Gasolina', 
        tituloMotor: 'TDI 1.4 16V',
        puertas: 3,
        peso: 1500, 
        titulo: 'Seat Ibiza Rojo, TDI 1.4 de 16V',
        descripcion: 'Tiene un motor TDI 1.4 de 16V - 100cv. Es del año 2004, pero tiene tan solo 100.000 Km. Está en perfecto estado, ITV recién pasada.', 
        precio: 5000, 
        principalFoto: 'seat_ibiza.jpg',
      },
      
    ]
  }
}
