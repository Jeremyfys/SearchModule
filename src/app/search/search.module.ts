import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { DetailModule } from '../detail/detail.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgmaterialModule } from '../ngmaterial.module';

import { SwapiService } from '../swapi.service';


@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgmaterialModule,
    DetailModule
  ],
  declarations: [SearchComponent],
  providers: [SwapiService]
})
export class SearchModule { }
