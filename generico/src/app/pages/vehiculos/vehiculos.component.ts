import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-vehiculos',
  standalone: false,
  templateUrl: './vehiculos.component.html',
  styleUrl: './vehiculos.component.sass'
})
export class VehiculosComponent {
  
  constructor(
    private navigationService: NavigationService,
  ) { }

  goBack() {
    this.navigationService.goBack()
  }

  goToVehiculoDetail(code: string) {
    this.navigationService.goToVehiculoDetail(code)
  }
}
