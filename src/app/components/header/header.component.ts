import { Component, OnInit } from '@angular/core';

interface Contactos {
  image: string;
  clase: string;
}

@Component({
selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  // Modal
  modalStatus: boolean = false;

  // Agrega el titulo del header o dejalo vacio
  subTitulo: string = '';

  // Agrega contactos a la vista
  contactos: Contactos[] = [
    {
      image: '/assets/contacto1.png',
      clase: 'contacto contacto-1'
    },
    {
      image: '',
      clase: 'contacto contacto-2'
    },
    {
      image: '/assets/contacto3.png',
      clase: 'contacto contacto-3'
    },
    {
      image: '/assets/add_user.svg',
      clase: 'contacto contacto-4'
    }
  ]

  ngOnInit(){}

  openModalContact() {
    this.modalStatus = true;
  }
}
