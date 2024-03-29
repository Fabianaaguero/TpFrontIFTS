import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { NosotrosComponent } from './Components/nosotros/nosotros.component';
import { HomeComponent } from './Components/home/home.component';
import { TablaComponent } from './Components/tabla/tabla.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { SuccesComponent } from './Components/succes/succes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NosotrosComponent,
    HomeComponent,
    TablaComponent,
    RegistroComponent,
    FormularioComponent,
    SuccesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
