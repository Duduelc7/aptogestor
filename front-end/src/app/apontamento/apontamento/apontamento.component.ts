import { ApiService } from './../services/api.service';
import { Apontamento } from './../model/apontamento.models';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-apontamento',
  templateUrl: './apontamento.component.html',
  styleUrls: ['./apontamento.component.css']
})
export class ApontamentoComponent {
  @ViewChild('formApontamento') formApontamento!: NgForm;
  apontamento: Apontamento[] = [];
  isLoading: boolean = false;
  editMode: boolean = false;
  currentEmpresaId?: number;
  subscription: Subscription | undefined;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.listarApontamento();

    this.subscription = this.apiService.refreshPage$.subscribe(() => {
      this.listarApontamento();
    })
  }
  //  ===================================== PRONTOS =====================================
  listarApontamento() {
    this.isLoading = true;
    this.apiService.listApontamento()
      .subscribe(apontamento => {
        this.isLoading = false;
        this.apontamento = apontamento;
      });
  }
  //  =====================================================================================

  SalvarForm(postData: { story_id: string; data_apto: string; vlr_apto: number }) {
    this.apiService.createApontamento(postData).subscribe();

    // if(!this.editMode){

    // } else{
    //   this.apiService.updateApontamento(this.currentEmpresaId, postData).subscribe();

    // }
    this.formApontamento.reset();

  }

  atualizarApontamento() {
    alert('Atualizar ainda não funciona');
  }

  deletarApontamento(id: number) {
    let text = 'Deseja realmente excluir o apontamento?';
    if (confirm(text) == true) {
      this.apiService.deleteApontamento(id).subscribe();
    } else {
      alert('presta atenção no que você tá clickando irmão!!');
    }
  }

}
