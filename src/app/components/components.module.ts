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
import { CardcorreoComponent } from './cardcorreo/cardcorreo.component';
import { MenudotsComponent } from './icons/menudots/menudots.component';
import { ArrowComponent } from './icons/arrow/arrow.component';
import { ResolveComponent } from './icons/resolve/resolve.component';
import { TrashComponent } from './icons/trash/trash.component';
import { ArchiveComponent } from './icons/archive/archive.component';
import { NextComponent } from './icons/next/next.component';
import { ShareComponent } from './icons/share/share.component';
import { PrintComponent } from './icons/print/print.component';
import { ArchivedComponent } from './icons/archived/archived.component';
import { EditComponent } from './icons/edit/edit.component';
import { CompanyComponent } from './icons/company/company.component';
import { AddlistComponent } from './icons/addlist/addlist.component';
import { InterestComponent } from './icons/interest/interest.component';
import { MailComponent } from './icons/mail/mail.component';
import { PlusComponent } from './icons/plus/plus.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ModalcontactoComponent,
    EmpresasyventasComponent,
    CardcontactoComponent,
    CardcomentarioComponent,
    NiveldeinteresComponent,
    CardlistapertenecesComponent,
    FootercontactoComponent,
    CardcorreoComponent,

    MenudotsComponent,
    ArrowComponent,
    ResolveComponent,
    TrashComponent,
    ArchiveComponent,
    NextComponent,
    ShareComponent,
    PrintComponent,
    ArchivedComponent,
    EditComponent,
    CompanyComponent,
    AddlistComponent,
    InterestComponent,
    MailComponent,
    PlusComponent

  ],
  exports: [
    HeaderComponent,
    ModalcontactoComponent,
    EmpresasyventasComponent,
    CardcontactoComponent,
    CardcomentarioComponent,
    NiveldeinteresComponent,
    CardlistapertenecesComponent,
    FootercontactoComponent,
    CardcorreoComponent,

    MenudotsComponent,
    ArrowComponent,
    ResolveComponent,
    TrashComponent,
    ArchiveComponent,
    NextComponent,
    ShareComponent,
    PrintComponent,
    ArchivedComponent,
    EditComponent,
    CompanyComponent,
    AddlistComponent,
    InterestComponent,
    MailComponent,
    PlusComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
