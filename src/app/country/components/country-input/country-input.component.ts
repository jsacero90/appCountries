import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { debounceTime, Subject, Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [],
})
export class CountryInputComponent implements OnInit, OnDestroy {
  @Input() placeholder: string = '';
  @Output() enterEvent: EventEmitter<string> = new EventEmitter();
  @Output() debounceEvent: EventEmitter<string> = new EventEmitter();

  private deboucer: Subject<string> = new Subject();

  public unSubscribable!: Unsubscribable;

  public term: string = '';

  ngOnInit(): void {
    this.unSubscribable = this.deboucer
      .pipe(debounceTime(300))
      .subscribe(value => {
        this.debounceEvent.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.unSubscribable.unsubscribe();
  }

  search(): void {
    this.enterEvent.emit(this.term);
  }

  keyPressed() {
    this.deboucer.next(this.term);
  }
}
