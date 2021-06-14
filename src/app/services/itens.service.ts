import { Injectable } from '@angular/core';
import { IListTableData } from '../interfaces/ilist-table-data';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class ItensService {

  private db:IListTableData[] = [];

  private storage:Storage;

  list():Promise<IListTableData[]>{
    return new Promise((resolve, reject) => {
        let local_db = this.storage.getItem('db') || '';
        if(local_db != ''){
          this.db = JSON.parse(local_db);
        } else {
          this.db = [];
        }
        setTimeout(()=>{}, 200);
        resolve(this.db);
    })
  }

  getOne(id:string):Promise<IListTableData>{
    return new Promise((resolve, reject) => {
      let el:any = {};
      this.db?.forEach((dbel) => {
        if(dbel.id == id){
          el = dbel;
        }
      });
      resolve(el);
    })
  }


  save(item:IListTableData):Promise<boolean>{
    return new Promise((resolve, reject) => {
      try {
        if(!item.id) item.id = uuidv4(); 
        this.db?.push(item);
        this.storage.setItem('db', JSON.stringify(this.db));
        resolve(true);
      } catch (error) {
        console.log('Falha geral ao salvar o item!', error);
        reject(error);
      }
     
    })
  }

  edit(data:IListTableData):Promise<boolean>{
    return new Promise((resolve, reject) => {
      try {
        let itemIndex = this.db.findIndex(item => item.id == data.id);
        this.db[itemIndex] = data;
        this.storage.setItem('db', JSON.stringify(this.db));
        console.log('Item atualizado!');
        resolve(true);
      } catch (error) {
        reject(error);
      }
      
    })
  }

  remove(id:string):Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.db?.forEach((dbel, index) => {
        if(dbel.id == id){
          this.db?.splice(index, 1);
          this.storage.setItem('db', JSON.stringify(this.db));
          resolve(true);
        }
      });
    })
  }

  constructor() {
    this.storage = window.localStorage;
  }
}
