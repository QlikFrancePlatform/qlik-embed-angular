import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomComponent } from './custom.component';
import { QlikEmbed } from '@qlik/embed-web-components/dist/embed';

@NgModule({
  declarations: [ CustomComponent, QlikEmbed ],
  exports: [ CustomComponent ],
  imports: [ CommonModule, QlikEmbed ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CustomModule {}
