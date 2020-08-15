import { NgModule } from '@angular/core';

import {CenterDirective} from "./directives/center.directive";
import {SidebarDirective} from "./directives/sidebar.directive";
import {PancakeDirective} from "./directives/pancake.directive";
import {HolyGrailDirective} from "./directives/holy-grail.directive";
import {GridCardsDirective} from "./directives/grid-cards.directive";
import { LineUpDirective } from './directives/line-up.directive';



@NgModule({
  declarations: [
    CenterDirective,
    SidebarDirective,
    PancakeDirective,
    HolyGrailDirective,
    GridCardsDirective,
    LineUpDirective,
  ],
  imports: [
  ],
  exports: [
    CenterDirective,
    SidebarDirective,
    PancakeDirective,
    HolyGrailDirective,
    GridCardsDirective,
  ]
})
export class AngularLayoutDirectivesLibModule { }
