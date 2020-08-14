import { NgModule } from '@angular/core';

import {CenterDirective} from "./directives/center.directive";
import {SidebarDirective} from "./directives/sidebar.directive";
import {PancakeDirective} from "./directives/pancake.directive";
import {HolyGrailDirective} from "./directives/holy-grail.directive";
import {GridCardsDirective} from "./directives/grid-cards.directive";



@NgModule({
  declarations: [
    CenterDirective,
    SidebarDirective,
    PancakeDirective,
    HolyGrailDirective,
    GridCardsDirective,
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
