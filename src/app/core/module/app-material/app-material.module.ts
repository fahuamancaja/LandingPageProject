import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  // imports: [
  //   CommonModule,
  //   MatToolbarModule,
  // ],
  exports: [
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule
  ]
})
export class AppMaterialModule { }
