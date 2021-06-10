import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
  {
    path: 'listagem', component:ListPageComponent,
    
  },
  {
    path: 'formulario', component: FormPageComponent
  },
  {
    path: 'editar/:id', component: FormPageComponent
  },
  {
    path: '', 
    redirectTo:'listagem',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
