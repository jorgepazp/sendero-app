import { Observable, Subject, Subscription, timer } from 'rxjs';

export class Timer {
  private timeElapsed = 0;
  private timer!: Observable<number> | null;
  private subscription!:Subscription;

  private readonly step: number;

  update = new Subject<number>();
  readonly isAlive = ():boolean =>{ return Boolean(this.timer) }

  constructor(step: number) {
    this.timeElapsed = 0;
    this.step = step;
  }

  start() {
    this.timer = timer(this.step, this.step);
    this.subscription = this.timer.subscribe(() => {
      this.timeElapsed = this.timeElapsed + this.step;
      this.update.next(this.timeElapsed);
    });
  }

  pause() {
    if (this.timer) {
      this.subscription.unsubscribe();
      this.timer = null;
    } else {
      this.start();
    }
  }

  stop() {
    if (this.timer) {
      this.subscription.unsubscribe();
      this.timer = null;
    }
  }


}