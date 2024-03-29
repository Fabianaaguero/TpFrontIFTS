import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NosotrosComponent } from './Components/nosotros/nosotros.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SuccesComponent} from "../app/Components/succes/succes.component"

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'RegistroExitoso', component:SuccesComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
