import { Component, Input, OnInit } from '@angular/core';

interface Contacto {
  name: string;
  image: string;
  status: boolean;
}

@Component({
  selector: 'app-modalcontacto',
  templateUrl: './modalcontacto.component.html',
  styleUrls: ['./modalcontacto.component.scss'],
})
export class ModalcontactoComponent implements OnInit {

  @Input() modalStatus: boolean;

  // Lista de los contactos
  contactos: Contacto[] = [
    {
      name: 'Jhordan Vásquez',
      image: '/assets/contactos/contacto-1.png',
      status: true
    },
    {
      name: 'Gerardo Ortiz',
      image: '/assets/contactos/contacto-2.png',
      status: false
    },
    {
      name: 'Juliana Dominguez',
      image: '/assets/contactos/contacto-3.png',
      status: true
    },
    {
      name: 'Wilfredo Díaz',
      image: '/assets/contactos/contacto-4.png',
      status: true
    },
    {
      name: 'Sheyla Gavidia',
      image: '/assets/contactos/contacto-5.png',
      status: true
    },
    {
      name: 'Manuel Álvarez',
      image: '/assets/contactos/contacto-6.png',
      status: false
    },
    {
      name: 'Jhordan Vásquez',
      image: '/assets/contactos/contacto-1.png',
      status: false
    },
    {
      name: 'Sheyla Gavidia',
      image: '/assets/contactos/contacto-5.png',
      status: false
    },
    {
      name: 'Amadeu Gálvez',
      image: '/assets/contactos/contacto-7.png',
      status: false
    }
  ]

  constructor() { }

  ngOnInit() {}

}
