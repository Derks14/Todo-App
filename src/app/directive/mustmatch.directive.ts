import {Directive, Input} from '@angular/core';
import {FormGroup, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {MustMatch} from '../register/register.component';

@Directive({
  selector: '[mustMatch]',
  providers: [{provide: NG_VALIDATORS, useExisting: MustmatchDirective, multi: true}]
})
export class MustmatchDirective  implements Validator {

  constructor() { }
  @Input('mustMatch') mustMatch: string[] = [];
  validate(formGroup: FormGroup): ValidationErrors {
    return MustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);

  }
}
