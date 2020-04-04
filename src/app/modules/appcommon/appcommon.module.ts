import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { CollapsiblePanelComponent } from './collapsible-panel/collapsible-panel.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { CollapsableNavItemComponent } from './collapsable-nav-item/collapsable-nav-item.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './notification/notification.service';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { RouterModule } from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DatepickerService, DateService } from './datepicker/datepicker.service';
import { NgbDatepickerModule, NgbModule, NgbDateParserFormatter, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { MainTitleComponent } from './main-title/main-title.component';
import { MainTitleService } from './main-title/main-title.service';

@NgModule({
  declarations: [CardComponent,
                 MenuButtonComponent,
                 LogoutButtonComponent,
                 CollapsiblePanelComponent,
                 NavItemComponent,
                 InputComponent,
                 CollapsableNavItemComponent,
                 CheckboxComponent,
                 RadioGroupComponent,
                 NotificationComponent,
                 DropdownComponent,
                 DatepickerComponent,
                 EmptyStateComponent,
                 MainTitleComponent
                 ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    NgbDatepickerModule
  ],
  exports: [
    CardComponent,
    MenuButtonComponent,
    LogoutButtonComponent,
    CollapsiblePanelComponent,
    NavItemComponent,
    InputComponent,
    CollapsableNavItemComponent,
    CheckboxComponent,
    RadioGroupComponent,
    NotificationComponent,
    DropdownComponent,
    DatepickerComponent,
    EmptyStateComponent,
    MainTitleComponent
  ],
  providers: [NotificationService, 
    MainTitleService,
    {provide: NgbDateParserFormatter, useClass: DatepickerService},
    {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}
  ]
})
export class AppcommonModule { }
