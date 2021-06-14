import { AfterViewChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IListTableData } from 'src/app/interfaces/ilist-table-data';
import { ItensService } from 'src/app/services/itens.service';
import Swal from 'sweetalert2';

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

  remove(id:any){
    Swal.fire({
      title: 'Tem certeza?',
      text: "Você não poderá desfazer essa ação!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, remova-o!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.itensS.remove(id).then(()=>{
          Swal.fire(
            'Produto deletado!',
            'Produto deletado com sucessso! .',
            'success'
          );
          this.loadItens();
        }, (error) => {
          Swal.fire(
            'Produto não foi deletado!',
            'Um erro ocorreu ao deletar, tente novamente mais tarde! .',
            'error'
          )
        })
        
      }
    })

  }

}
