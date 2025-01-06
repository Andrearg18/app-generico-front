import { Injectable } from '@angular/core';
import { Recambio } from '../models/recambio';

@Injectable({
  providedIn: 'root'
})
export class RecambiosService {

  constructor() { }

  public getRecambiosList(): Recambio[] {
    //Leer fichero shared/data-list/recambios-list
    
    return []
  }

  public getRecambioDetail(code: string): Recambio {
    //Leer fichero shared/data-list/recambios-list
    //Buscar el recambio por code
    
    return []
  }

  public updateRecambio(code: string): boolean {
    //Leer fichero shared/data-list/recambios-list
    //Buscar el recambio por code
    //Actualizar fichero - guardar
    
    return true
  }

  public deleteRecambio(code: string): boolean {
    //Leer fichero shared/data-list/recambios-list
    //Buscar el recambio por code
    //Actualizar fichero - guardar
    
    return true
  }
}
