import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private _router: Router
  ) { }

  public goToSpareHome() {
    this._router.navigate(['/home'])
  }

  public goToVehiculos() {
    this._router.navigate(['/vehiculos']);
  }

  public goToVehiculoDetail(code: string) {
    this._router.navigate(['/vehiculos']);
  }

  public goToRecambios() {

  }

  public goToRecambioDetail(code: string) {

  }

  public goToContacto() {

  }
}
