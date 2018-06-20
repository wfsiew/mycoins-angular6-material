import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatTableModule, 
  MatToolbarModule, 
  MatButtonModule, 
  MatCardModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatSnackBarModule } from '@angular/material';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class MatModules { }