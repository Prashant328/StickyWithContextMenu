import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatMenuModule} from '@angular/material/menu';

//needed
// import { MatMenuTrigger } from '@angular/material/menu';


@NgModule({
  exports: [
    MatIconModule,
    MatListModule,
    MatMenuModule,
    // MatMenuTrigger
  ]
})
export class MaterialModule { }
