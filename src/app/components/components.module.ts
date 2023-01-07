import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { ModalcontactoComponent } from './modalcontacto/modalcontacto.component';
import { EmpresasyventasComponent } from './empresasyventas/empresasyventas.component';
import { CardcontactoComponent } from './cardcontacto/cardcontacto.component';
import { CardcomentarioComponent } from './cardcomentario/cardcomentario.component';
import { NiveldeinteresComponent } from './niveldeinteres/niveldeinteres.component';
import { CardlistapertenecesComponent } from './cardlistaperteneces/cardlistaperteneces.component';
import { FootercontactoComponent } from './footercontacto/footercontacto.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ModalcontactoComponent,
    EmpresasyventasComponent,
    CardcontactoComponent,
    CardcomentarioComponent,
    NiveldeinteresComponent,
    CardlistapertenecesComponent,
    FootercontactoComponent
  ],
  exports: [
    HeaderComponent,
    ModalcontactoComponent,
    EmpresasyventasComponent,
    CardcontactoComponent,
    CardcomentarioComponent,
    NiveldeinteresComponent,
    CardlistapertenecesComponent,
    FootercontactoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
