import {AbstractControl} from '@angular/forms';


export function ValidateEqualTo(control: AbstractControl, compareTo:string) {

  if (control.value == compareTo) return { validEqualTo: true };
  return null;

}