import { CursosComponent } from './components/cursos/cursos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MeComponent } from './components/me/me.component';



const routes: Routes = [
  {
    path: '',
    component: MeComponent
  },
  {
    path: 'me',
    component: MeComponent
  },
  {
    path: 'cursos',
    component: CursosComponent
   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
