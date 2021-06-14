import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router } from '@angular/router';
import { IListTableData } from 'src/app/interfaces/ilist-table-data';
import { ItensService } from 'src/app/services/itens.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  id?:string;

  data:IListTableData|undefined;

  window_mode = 'new';
  

  bol:any = true;

  constructor(
    private routeSnap:ActivatedRoute,
    private itensS:ItensService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    //verificar se é edição?
    console.log(this.routeSnap);
    this.id = this.routeSnap.snapshot.paramMap.get('id') || undefined;
    if(this.id != undefined){
      this.window_mode = 'edit';
      this.loadData(this.id);
    } else {
      this.window_mode = 'new';
    }
  }

  loadData(id:string){
    console.log('chamou o loaddata?');
    this.itensS.getOne(id).then((data) => {
      console.log(data);
      if(data){
        this.data = data;
      }
    })
  }

  public receiveData(event:any){
    console.log('RECEBIDO', event);
    this.data = event;
    

    if(this.window_mode == 'edit'){
      this.itensS.edit(event).then(()=>{
        Swal.fire({
          title: 'Sucesso!',
          text: 'Alteração realizada com sucesso!',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#2196F3',
          confirmButtonText: 'Ok'
        }).then((result) => {
          this.router.navigate(['/listagem']);
        })
      }, ()=>{
        Swal.fire({
          title: 'Erro!',
          text: 'Ocorreu uma falha ao tentar alterar o item! Tente novamente mais tarde!',
          icon: 'error',
          showCancelButton: false,
          confirmButtonColor: '#2196F3',
          confirmButtonText: 'Ok'
        }).then((result) => {
          this.router.navigate(['/formulario']);
        })
      });
    } else {
      this.itensS.save(event).then(()=>{
        Swal.fire({
          title: 'Sucesso!',
          text: 'Seu item foi salvo com sucesso!',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#2196F3',
          confirmButtonText: 'Ok'
        }).then((result) => {
          console.log('navegando...');
          this.router.navigate(['/listagem']);
        })
      }, ()=>{
        Swal.fire({
          title: 'Erro!',
          text: 'Ocorreu uma falha ao tentar salbar o item! Tente novamente mais tarde!',
          icon: 'error',
          showCancelButton: false,
          confirmButtonColor: '#2196F3',
          confirmButtonText: 'Ok'
        }).then((result) => {
          this.router.navigate(['/formulario']);
        })
      });
    }
  }

  

}
