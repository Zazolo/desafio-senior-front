import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route } from '@angular/router';
import { IListTableData } from 'src/app/interfaces/ilist-table-data';
import { ItensService } from 'src/app/services/itens.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  id:string | null = '123456';

  data:IListTableData|undefined;

  constructor(
    private routeSnap:ActivatedRoute,
    private itensS:ItensService
  ) { }

  ngOnInit(): void {
    //verificar se é edição?
    this.id = this.routeSnap.snapshot.paramMap.get('id');
    if(this.id != null){
      this.loadData(this.id);
    }
  }

  loadData(id:string){
    console.log('chamou?');
    this.itensS.getOne(id).then((data) => {
      console.log(data);
      if(data){
        this.data = data;
      }
    })
  }

  public receiveData(event:any){
    console.log('RECEBIDO', event);
  }

}
