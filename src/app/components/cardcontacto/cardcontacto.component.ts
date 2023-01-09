import { Component, OnInit } from '@angular/core';

interface Contacto {
  imagen: string;
  nombre: string;
  celular: string;
  correo: string;
  etiquetas: Etiqueta[];
}

interface Etiqueta {
  nombre: string;
  tipo: string;
}

@Component({
  selector: 'app-cardcontacto',
  templateUrl: './cardcontacto.component.html',
  styleUrls: ['./cardcontacto.component.scss'],
})
export class CardcontactoComponent implements OnInit {

  contacto: Contacto = {
    imagen: '/assets/contacto.png',
    nombre: 'Carla Mamani',
    celular: '+51 943 786 708',
    correo: 'carla@gmail.com',
    etiquetas: [
      {
        nombre: 'Cliente interno',
        tipo: 'etiqueta-azul'
      },
      {
        nombre: 'Lead',
        tipo: 'etiqueta-roja'
      }
    ]
  }

  constructor() { }

  ngOnInit() {}

}
