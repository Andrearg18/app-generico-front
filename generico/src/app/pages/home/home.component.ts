import { Component } from '@angular/core'
import { NavigationService } from '../../services/navigation.service.js'

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

  constructor(
    private _navigationService: NavigationService,
  ) { }

  goToVehiculos(element?: HTMLElement) {
    this._animationNavigate(() => this._navigationService.goToVehiculos(), element)
  }

  goToRecambios(element?: HTMLElement) {
    this._animationNavigate(() => this._navigationService.goToRecambios(), element)
  }

  goToContact(element?: HTMLElement) {
    this._animationNavigate(() => this._navigationService.goToContact(), element)
  }

  private _animationNavigate(
    navigationFn: () => void,
    container?: HTMLElement
  ): void {
    if (container) {
      container.classList.add('absorbing')
      container.closest('.page')?.classList.add('navigating')
      container.closest('.wrapper')?.classList.add('navigating')
    }

    setTimeout(() => navigationFn(), 200)
  }
}
