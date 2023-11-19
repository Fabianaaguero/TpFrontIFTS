import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  botton :boolean = false;

menu(event : Event) : void  {

     this.botton = !this.botton;
     console.log(this.botton);
 }

}
