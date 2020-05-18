import { Directive, Optional, Inject, ViewContainerRef, ComponentFactoryResolver, ComponentRef, Input, Host, ElementRef, OnInit, EventEmitter } from '@angular/core';
import { NgControl, ControlContainer } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { FORM_ERRORS } from './form-errors';
import { ControlErrorComponent } from '../control-error/control-error.component';
import { ControlErrorContainerDirective } from './control-error-container.directive';
// import { FormSubmitDirective } from './form-submit.directive.ts';
import { merge, EMPTY, Observable, fromEvent } from 'rxjs';

@Directive({
  selector: '[formControl], [formControlName]'
})
export class ControlErrorsDirective implements OnInit {
  ref: ComponentRef<ControlErrorComponent>;
  container: ViewContainerRef;
  submit$: Observable<Event>;
  @Input() customErrors = {};

  constructor(
    private el: ElementRef,
    private _viewContainerRef: ViewContainerRef,
    private vcr: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    @Optional() controlErrorContainer: ControlErrorContainerDirective,
    @Inject(FORM_ERRORS) private errors,
    // @Optional() @Host() private form: FormSubmitDirective,
    private controlDir: NgControl) {
    this.container = controlErrorContainer ? controlErrorContainer.vcr : vcr;
    // this.submit$ = this.form ? this.form.submit$ : EMPTY;
  }

  ngOnInit() {
    const hostComponent = this._viewContainerRef['_data'].componentView.component;
    if (hostComponent.blur) {
        (hostComponent.blur as EventEmitter<any>)
        .subscribe(() => this.checkErrors());
    }
    merge(
      this.control.valueChanges
    ).pipe(
      untilDestroyed(this)).subscribe((v) => {
        this.checkErrors();
      });
  }

  checkErrors() {
    const controlErrors = this.control.errors;
    if (controlErrors) {
      const firstKey = Object.keys(controlErrors)[0];
      const getError = this.errors[firstKey];
      const text = this.customErrors[firstKey] || getError(controlErrors[firstKey]);
      this.setError(text);
    } else if (this.ref) {
      this.setError(null);
    }
  }

  get control() {
    return this.controlDir.control;
  }

  setError(text: string) {
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(ControlErrorComponent);
      this.ref = this.container.createComponent(factory);
    }

    this.ref.instance.text = text;
  }

  ngOnDestroy() { }

}