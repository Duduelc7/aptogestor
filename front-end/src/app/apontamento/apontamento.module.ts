import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApontamentoComponent, ApiService, UppercasePipePipe } from './index';

@NgModule({
  declarations: [
    ApontamentoComponent,
    UppercasePipePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ]
})
export class ApontamentoModule { }
