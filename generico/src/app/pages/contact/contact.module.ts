import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { MatIconModule } from '@angular/material/icon';
import { NavigationService } from '../../services/navigation.service';
import { GoogleMap } from '@angular/google-maps';
import { MatTooltipModule } from '@angular/material/tooltip';


const ANGULAR_MATERIAL = [
  MatIconModule,
  MatTooltipModule,
]


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    ANGULAR_MATERIAL,
    CommonModule,
    GoogleMap,
  ],
  providers: [NavigationService], 
  exports: [ContactComponent]
})
export class ContactModule { }
