import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { NgmaterialModule } from '../ngmaterial.module';
import { BingImageService } from '../bing-image.service';
import { SwapiService } from '../swapi.service';


@NgModule({
  imports: [
    CommonModule,
    DetailRoutingModule,
    NgmaterialModule
  ],
  declarations: [DetailComponent],
  providers: [BingImageService, SwapiService],
  exports: [DetailComponent]
})
export class DetailModule { }
