import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    ToastComponent
  ],
  exports:[ToastComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class ToastModule { }
