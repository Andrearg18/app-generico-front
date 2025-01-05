import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private _router: Router
  ) { }

  public goToHome() {
    this._router.navigate(['/inicio'])
  }

  public goToContact() {
    this._router.navigate(['/contacto']);
  }

  public goToVehiculos() {
    this._router.navigate(['/vehiculos']);
  }

  public goToVehiculoDetail(code: string) {
    this._router.navigate(['/vehiculos', code]);
  }

  public goToRecambios() {
    this._router.navigate(['/recambios']);
  }

  public goToRecambioDetail(code: string) {
    this._router.navigate(['/recambios', code]);

  }

  public goToMaps(latitud: string, longitud: string) {
    window.open(
      `https://www.google.com/maps?q=${latitud},${longitud}`, 
      '_blank')
  }

  public goToPhone(phone: string) {
    window.location.href = `tel:${phone}`
  }

  public goToEmail(email: string, subject: string, body: string) {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  public goBack() {
    window.history.back()
  }
}
