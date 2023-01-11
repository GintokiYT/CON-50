import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-niveldeinteres',
  templateUrl: './niveldeinteres.component.html',
  styleUrls: ['./niveldeinteres.component.scss'],
})
export class NiveldeinteresComponent implements OnInit {

  nivelInteres: number = 3;

  constructor() { }

  ngOnInit() {}

  actualizarNivel(nivel: number) {
    this.nivelInteres = nivel;
  }

}
