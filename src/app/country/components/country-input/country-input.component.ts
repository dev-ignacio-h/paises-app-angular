import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [],
})
export class CountryInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debuncer: Subject<string> = new Subject();

  term: string = '';

  ngOnInit(): void {
    this.debuncer
      .pipe(debounceTime(300))
      .subscribe((value) => this.onDebounce.emit(value));
  }
  buscar() {
    this.onEnter.emit(this.term);
  }
  keyPressed() {
    this.debuncer.next(this.term);
  }
}
