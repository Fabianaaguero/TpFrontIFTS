import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TablaComponent } from './Components/tabla/tabla.component';
import { NosotrosComponent } from './Components/nosotros/nosotros.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { FormularioComponent } from './Components/formulario/formulario.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tabla', component: TablaComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'formulario', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
