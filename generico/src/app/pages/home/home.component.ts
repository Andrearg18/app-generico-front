import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service.js';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

  constructor(
    private _navigationService: NavigationService,
  ) {}

  goToVehiculos() {
    this._navigationService.goToVehiculos();
  }

  goToRecambios() {
    this._navigationService.goToRecambios();
  }

  goToContact() {
    this._navigationService.goToContact();
  }
}
