import { Directive, ElementRef, Renderer2, OnInit, OnDestroy, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[formControlName]'
})
export class BootstrapValidationStyleDirective implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();

  constructor(private control: NgControl, private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('blur') onBlur() {
    this.updateControlStyle();
  }

  ngOnInit() {
    this.control.statusChanges
      .takeUntil(this.unsubscribe)
      .distinctUntilChanged()
      .subscribe(() => {
        this.updateControlStyle();
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private updateControlStyle() {
    if (this.control.invalid && this.control.touched) {
      this.renderer.removeClass(this.element.nativeElement, 'is-valid');
      this.renderer.addClass(this.element.nativeElement, 'is-invalid');
    } else {
      this.renderer.removeClass(this.element.nativeElement, 'is-invalid');

      if (this.control.valid && this.control.touched) {
        this.renderer.addClass(this.element.nativeElement, 'is-valid');
      }
    }
  }
}
