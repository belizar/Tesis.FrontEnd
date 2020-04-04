import { ValidatorFn, AbstractControl } from '@angular/forms';


export function regexValidator(regex: RegExp): ValidatorFn {

  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = regex.test(control.value);
    return forbidden ? {regexInvalid: {value: control.value}} : null;
  };
}
