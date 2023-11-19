import { Component } from '@angular/core';
import { Libro } from 'src/Model/library.model';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent {
  libros: Libro[] = [
    {
      nombre:"¡CÓMO SALIR DEL POZO!",
      imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNaeNAQYsRwYePT9dUL6l-BvMuZzFD6-urqYRfGa6WC1v--JzRJEZ-Jnm1toqxbVIyBk&usqp=CAU',
      autor:"Andres Oppenheimer",
      genero:"Sociologia",
      anio:2023,
      ranking:"★★★",
    },
    {
      nombre:"Hábitos Atómicos",
      imagen:"https://images.cdn1.buscalibre.com/fit-in/360x360/92/19/9219f95b47e9354ec97aa899104f705a.jpg",
      autor:"James Clear",
      genero:"Autoayuda",
      anio:2019,
      ranking:"★★★★",
    },
    {
      nombre:"La Revolución de la Glucosa",
      imagen:"https://pre.tematika.com/media/catalog/Ilhsa/Imagenes/697042.jpg",
      autor:"Jessie Inchauspé",
      genero:"Salud",
      anio:2022,
      ranking:"★★★",
    },
    {
      nombre:"LA BIBLIOTECA DE LA MEDIANOCHE",
      imagen:"https://images.cdn3.buscalibre.com/fit-in/360x360/9b/93/9b93d20c1ab047b3c13a349aa8ea139d.jpg",
      autor:"Matt Haig",
      genero:"Ficción",
      anio:2021,
      ranking:"★★★★",
    },
    {
      nombre:"LA MUJER QUE SOY",
      imagen:"https://www.penguinlibros.com/ar/2753434/la-mujer-que-soy.jpg",
      autor:"Britney Spears",
      genero:"Biografías de Mujeres",
      anio:2023,
      ranking:"-",
    },
    {
      nombre:"LA BAILARINA DE AUSCHWITZ",
      imagen:"https://images.cdn3.buscalibre.com/fit-in/360x360/4f/29/4f29c82a74ed4f17bf0e173bb2ac61b1.jpg",
      autor:"EDITH EGER",
      genero:"Historia",
      anio:2018,
      ranking:"★★★",
    },
    {
      nombre:"MESSI",
      imagen:"https://www.planetadelibros.com.ar/usuaris/libros/fotos/275/m_libros/274262_portada_messi_guillem-balague_202209151041.jpg",
      autor:"Guillem Balague",
      genero:"Deporte",
      anio:2023,
      ranking:"★★★",
    },
    {
      nombre:"BUSINESSCOACH",
      imagen:"https://m.media-amazon.com/images/I/81kcPxKRXFL._AC_UF1000,1000_QL80_.jpg",
      autor:"Rodrigo Coutiño",
      genero:"Desarrollo Empresarial",
      anio:2023,
      ranking:"★",
    },
    {
      nombre:"LOS 7 HABITOS DE LA GENTE ALTAMENTE EFECTIVA",
      imagen:"https://images.cdn1.buscalibre.com/fit-in/360x360/df/a8/69ac702996e6dcba64e483fad6050942.jpg",
      autor:"Stephen Covey",
      genero:"Autoayuda",
      anio:1989,
      ranking:"★★★★",
    },
    {
      nombre:"AMIGOS, AMANTES Y AQUELLO TAN TERRIBLE",
      imagen:"https://images.cdn1.buscalibre.com/fit-in/360x360/88/04/8804428da38d155918fb4556a49965f0.jpg",
      autor:"Matthew Perry",
      genero:"Bibliografia",
      anio:2022,
      ranking:"★★★★",
    }
  ]
}
