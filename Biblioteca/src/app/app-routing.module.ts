import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { EliminadoComponent } from './Components/eliminado/eliminado.component'; 
import { NosotrosComponent } from './Components/nosotros/nosotros.component';
import { RegistroComponent } from './Components/registro/registro.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'eliminado', component: EliminadoComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
