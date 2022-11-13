import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast } from './toast.interface';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  public get lastToastInstance(){
    return this.toast.value
  }
 toast:BehaviorSubject<Toast|null> = new BehaviorSubject<Toast|null>(null);
  constructor() { }
  openToast(newToast:Toast){
    this.toast.next(newToast);
  }

}
