import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface LetContext<T> {
  directiveLet: T | null;
}

@Directive({
  selector: '[directiveLet]',
})
export class LetDirective<T> {
  private _context: LetContext<T> = { directiveLet: null };

  constructor(
    _viewContainer: ViewContainerRef,
    _templateRef: TemplateRef<LetContext<T>>
  ) {
    _viewContainer.createEmbeddedView(_templateRef, this._context);
  }

  @Input()
  set directiveLet(value: T) {
    this._context.directiveLet = value;
  }
}
