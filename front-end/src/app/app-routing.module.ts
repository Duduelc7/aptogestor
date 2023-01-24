import { ApontamentoComponent } from './apontamento/apontamento/apontamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Apontamentos',
    pathMatch: 'full'
  },
  {
    path: 'Apontamentos',
    component: ApontamentoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
