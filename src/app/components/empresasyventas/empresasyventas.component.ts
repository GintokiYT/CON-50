import { Component, OnInit } from '@angular/core';

interface Empresa {
  imagen: string;
  nombre: string;
  valor: string;
}

@Component({
  selector: 'app-empresasyventas',
  templateUrl: './empresasyventas.component.html',
  styleUrls: ['./empresasyventas.component.scss'],
})
export class EmpresasyventasComponent implements OnInit {

  empresas: Empresa[] = [
    {
      imagen: '/assets/empresas/elishop.svg',
      nombre: 'ELISHOP',
      valor: 'S/3.8K'
    },
    {
      imagen: '/assets/empresas/empresa.svg',
      nombre: 'GEOR',
      valor: 'S/1.4K'
    },
    {
      imagen: '/assets/empresas/tesla.svg',
      nombre: 'Ortiz Mayorista',
      valor: 'S/12.7K'
    },
    {
      imagen: '/assets/empresas/empresa.svg',
      nombre: 'High Studio',
      valor: 'S/10.1K'
    },
    {
      imagen: '/assets/empresas/empresa.svg',
      nombre: 'Corporación Reque',
      valor: 'S/890'
    }
  ]

  constructor() { }

  ngOnInit() {}

  onClick() {
    console.log('Diste click');
  }

}
