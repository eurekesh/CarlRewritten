import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from "./layout.component";
import {NavModule} from "../nav/nav.module";



@NgModule({
  declarations: [LayoutComponent],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    NavModule
  ]
})
export class LayoutModule { }
