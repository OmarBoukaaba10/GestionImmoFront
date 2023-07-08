import { Injectable } from '@angular/core';
import { Subject, Observable, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionTimeoutService {
  private idleTimeout: number =  60 * 1000; // 5 minutes
  private resetTimer$: Subject<void> = new Subject<void>();
  public idleTimeout$: Observable<void> = this.resetTimer$.asObservable();

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor() {
    this.initListener();
    this.resetTimer();
  }

  private initListener(): void {
    const events = ['mousemove', 'keydown', 'click', 'touchstart'];

    events.forEach((eventName) => {
      document.addEventListener(eventName, () => {
        this.resetTimer();
      });
    });
  }

  private resetTimer(): void {
    this.unsubscribe$.next(); // Unsubscribe from previous timer
    this.unsubscribe$.complete();

    timer(this.idleTimeout)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.handleTimeout();
      });
  }

  private handleTimeout(): void {
    // Emit the timeout event
    this.resetTimer$.next();
  }
}
