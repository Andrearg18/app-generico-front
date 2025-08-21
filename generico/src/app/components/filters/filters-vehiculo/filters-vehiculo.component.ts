import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VehiculoFilter, VehiculosFiltersService } from '../../../services/vehiculos-filters.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filters-vehiculo',
  standalone: false,
  
  templateUrl: './filters-vehiculo.component.html',
  styleUrl: './filters-vehiculo.component.sass'
})
export class FiltersVehiculoComponent implements OnInit {
  filtersForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private _dialogRef: MatDialogRef<FiltersVehiculoComponent>,
    private _filtersService: VehiculosFiltersService,
    @Inject(MAT_DIALOG_DATA) private _filters: VehiculoFilter
  ){}

  ngOnInit(): void {
    this.filtersForm = this.fb.group({
      tipo: [this._filters?.tipo ?? ''],
      marca: [this._filters?.marca ?? ''],
    });
  }

  reset(): void {
    this.filtersForm.reset()
  }

  applyFiltros(): void {
    this._dialogRef.close(this.filtersForm)
  }

  cancel(): void {
    this._dialogRef.close()
  }

  getMarcas(): string[] {
    return this._filtersService.getMarcasFilter()
  }
}
