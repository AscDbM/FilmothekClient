import {AbstractControl, FormGroup} from '@angular/forms';


export const ValidatorEqualTo = (compare:string, compareTo:string) => {
  return (form: FormGroup ) => {
    if (form.get(compare).value == form.get(compareTo).value) return null; //valid
    return { validEqualTo: true }; //invalid
  }
}