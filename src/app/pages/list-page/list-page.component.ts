import { AfterViewChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IListTableData } from 'src/app/interfaces/ilist-table-data';
import { ItensService } from 'src/app/services/itens.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit, OnChanges {

  data?:IListTableData[];

  constructor(
    private itensS:ItensService,
    private router:Router
  ) { }
  

  ngOnChanges(changes: SimpleChanges): void {
    console.log('TEVE MUDANÇA', changes);
  }

  ngOnInit(): void {
    this.loadItens();
  }

  loadItens(){
    this.itensS.list().then((itens) => {
      if(itens){
        this.data = itens;
      }

      console.log(itens);
    })
  }

  edit(evt:any){
    console.log(evt);
    this.router.navigate(['/editar/' + evt]);
  }

  remove(evt:any){
    console.log('REMOVE', evt);
  }

}
