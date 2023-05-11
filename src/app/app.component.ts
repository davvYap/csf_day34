import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CountComponent } from './count/count.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'subscriptionObservable';

  count: number = 0;
  count$!: Observable<number>;
  countSubscription$!: Subscription;
  numberFromSubscription: number = 0;

  @ViewChild(CountComponent)
  countComponent!: CountComponent;

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.count$ = this.countComponent.value;
    this.countSubscription$ = this.countComponent.value.subscribe((n) => {
      this.numberFromSubscription = n * 2;
    });
  }

  ngOnDestroy(): void {
    this.countSubscription$.unsubscribe();
  }

  getCount(num: number) {
    this.count = num;
  }
}
