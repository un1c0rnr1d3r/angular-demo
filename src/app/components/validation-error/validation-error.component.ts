import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.scss']
})
export class ValidationErrorComponent {
  @Input() for: FormControl;
  @Input() type: string;
  @Input() hideWhen?: string | Array<string>;

  get shouldDisplayErrorMessage() {
    const hasErrorMessage = this.for && this.for.invalid && this.for.touched && this.for.errors[this.type];
    if (hasErrorMessage) {
      if (this.hideWhen) {
        if (typeof this.hideWhen === 'string') {
          return !this.for.errors[this.hideWhen];
        } else {
          return !this.hideWhen.some(type => this.for.errors[type]);
        }
      }
      return true;
    }
    return false;
  }
}
