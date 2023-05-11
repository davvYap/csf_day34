import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
})
export class CountComponent {
  @Output()
  count = new EventEmitter<number>();

  get value() {
    return this.count;
  }

  pressed() {
    let n: number = Math.floor(Math.random() * 100) + 1;
    this.count.emit(n);
  }
}
