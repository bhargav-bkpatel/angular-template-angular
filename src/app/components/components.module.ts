import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Card } from './card/card.component'

@NgModule({
  declarations: [Card],
  imports: [CommonModule, RouterModule],
  exports: [Card],
})
export class ComponentsModule {}
