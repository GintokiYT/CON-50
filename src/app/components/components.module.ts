import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { ModalcontactoComponent } from './modalcontacto/modalcontacto.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ModalcontactoComponent
  ],
  exports: [
    HeaderComponent,
    ModalcontactoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
