import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatIconModule } from '@angular/material/icon';
import { NavigationService } from '../../services/navigation.service';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  providers: [NavigationService], 
  exports: [HomeComponent]
})
export class HomeModule { }
