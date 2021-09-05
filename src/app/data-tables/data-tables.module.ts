import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesRoutingModule } from './data-tables-routing.module';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    DataTablesRoutingModule
  ]
})
export class DataTablesModule { }
