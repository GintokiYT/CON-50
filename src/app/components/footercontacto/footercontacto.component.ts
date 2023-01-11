import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footercontacto',
  templateUrl: './footercontacto.component.html',
  styleUrls: ['./footercontacto.component.scss'],
})
export class FootercontactoComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  // Modal de la derecha
  abrirModal2() {
    const modal2 = document.querySelector('.modal-footer-dos');

    modal2?.classList.add('open-modal-dos');
  }
  cerrarModal2() {
    const modal2 = document.querySelector('.modal-footer-dos');

    modal2?.classList.remove('open-modal-dos');
  }

  // Modal de la izquierda
  abrirModal1() {
    const modal1 = document.querySelector('.modal-footer-uno');

    modal1?.classList.add('open-modal-uno');
  }
  cerrarModal1() {
    const modal1 = document.querySelector('.modal-footer-uno');

    modal1?.classList.remove('open-modal-uno');
  }
}
