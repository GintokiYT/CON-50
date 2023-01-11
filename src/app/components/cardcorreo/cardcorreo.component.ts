import { Component, OnInit } from '@angular/core';

interface Correo {
  imagen: string;
  nombre: string;
  fecha: string;
  comentario: string;
  estado: string;
  icon: boolean;
}

@Component({
  selector: 'app-cardcorreo',
  templateUrl: './cardcorreo.component.html',
  styleUrls: ['./cardcorreo.component.scss'],
})
export class CardcorreoComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  correos: Correo[] = [
    {
      imagen: '/assets/correo/gerardo_ortiz.png',
      nombre: 'Gerardo Ortíz',
      fecha: '12 oct 22',
      comentario: 'Estados financieros 2022',
      estado: '4',
      icon: false
    },
    {
      imagen: '/assets/correo/wilfredo_diaz.png',
      nombre: 'Wilfredo Díaz',
      fecha: '12 oct 22',
      comentario: 'Estados financieros 2022',
      estado: '4',
      icon: false
    },
    {
      imagen: '/assets/correo/sheyla_gavidia.png',
      nombre: 'Sheyla Saavedra Sánchez',
      fecha: '12 oct 22',
      comentario: 'Por favor envíeme todas las cotizaciones',
      estado: '4',
      icon: true
    },
    {
      imagen: '/assets/correo/wilfredo_diaz.png',
      nombre: 'Wilfredo Díaz',
      fecha: '12 oct 22',
      comentario: 'Estados financieros 2022',
      estado: '',
      icon: true
    },
  ]
}
