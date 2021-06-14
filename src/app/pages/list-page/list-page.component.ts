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
export class ListPageComponent implements OnInit {

  data?:IListTableData[];

  constructor(
    private itensS:ItensService,
    private router:Router
  ) { }
  

  ngOnInit(): void {
    this.loadItens();
  }

  /**
   * Carrega/recarrega a lista de ícones na tela inicia.
   */
  loadItens(){
    this.itensS.list().then((itens) => {
      if(itens){
        this.data = itens;
      }

      console.log(itens);
    })
  }

  /**
   * Encaminha para pãgina de edição
   * @param evt 
   */
  edit(evt:any){
    console.log(evt);
    this.router.navigate(['/editar/' + evt]);
  }

  /**
   * Remove item
   * @param id 
   */
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
