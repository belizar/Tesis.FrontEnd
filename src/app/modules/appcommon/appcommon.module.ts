import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { CollapsiblePanelComponent } from './collapsible-panel/collapsible-panel.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LoaderComponent } from './loader/loader.component';
import { FooterPagerComponent } from './footer-pager/footer-pager.component';
import { FooterPagerService } from './footer-pager/footer-pager.service';
import { PreviewModalComponent } from './preview-modal/preview-modal.component';
import { CollapsiblePanelItemComponent } from './collapsible-panel-item/collapsible-panel-item.component';
import { ControlErrorComponent } from './control-error/control-error.component';
import { ControlErrorsDirective } from './control-error-directive/control-error.directive';
import { ControlErrorContainerDirective } from './control-error-directive/control-error-container.directive';


const components = [CardComponent,
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
  MainTitleComponent,
  LoaderComponent,
  FooterPagerComponent,
  PreviewModalComponent,
  CollapsiblePanelItemComponent,
  ControlErrorsDirective, ControlErrorComponent, ControlErrorContainerDirective,];
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    NgbDatepickerModule
  ],
  exports: [...components],
  entryComponents: [ControlErrorComponent],
  providers: [NotificationService,
    MainTitleService,
    FooterPagerService,
    {provide: NgbDateParserFormatter, useClass: DatepickerService},
    {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}
  ]
})
export class AppcommonModule { }
