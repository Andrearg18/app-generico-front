import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { MatIconModule } from '@angular/material/icon';
import { NavigationService } from '../../services/navigation.service';
import { GoogleMap } from '@angular/google-maps';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinner } from "@angular/material/progress-spinner";


const ANGULAR_MATERIAL = [
  MatIconModule,
  MatTooltipModule,
  MatLabel,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinner
]


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    ANGULAR_MATERIAL,
    CommonModule,
    ReactiveFormsModule,
    GoogleMap,
    BrowserAnimationsModule,
    MatProgressSpinner
],
  providers: [NavigationService], 
  exports: [ContactComponent]
})
export class ContactModule { }
