import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.sass'
})
export class ContactComponent {
  // center = { lat: 40.730610, lng: -73.935242 }
  // zoom = 12
  // markerPosition = { lat: 40.730610, lng: -73.935242 }
  
  constructor(
    private _navigationService: NavigationService,
  ) {}

  goToHome() {
    this._navigationService.goToHome()
  }

  goToInstagram() {
    window.open(
      'https://www.instagram.com/jl_competicion/?igshid=OGQ5ZDc2ODk2ZA%3D%3Dl', 
      '_blank'
    )
  }
  
  goToMaps() {
    this._navigationService.goToMaps('43.291392062339696', '-5.676714929997462')
  }

  goToPhone(phone: string) {
    this._navigationService.goToPhone(phone)
  }

  goToEmail(email: string) {
    this._navigationService.goToEmail(email, '', '')
  }

  goBack() {
    this._navigationService.goBack()
  }
}
