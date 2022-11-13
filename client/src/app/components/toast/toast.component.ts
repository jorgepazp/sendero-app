import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Timer } from 'src/app/util/timer';
import { Toast } from './toast.interface';
import { ToastService } from './toast.service';

@Component({
  selector: 'toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  get currentToast(){
    this.historicToastsCreated++;
    return this.historicToastsCreated;
  }
  timeOfLife:number = 8000;
  defaultColor:string = 'primary'
  private historicToastsCreated:number = 0;
  toasts:BehaviorSubject<Toast[]> = new BehaviorSubject<Toast[]>([]);
  show:boolean = false;
  constructor(private ts:ToastService) { }
  timer!:Timer;
  ngOnInit(): void {
    this.ts.toast.subscribe(x=>{
      if(x){
        this.openToast(x);
      }
    })
  }

  openToast(toast:Toast){ 
    toast.id = this.currentToast;
    toast.timer = new Timer(10);
    toast.visible = true;
    toast.timer.update.subscribe(time=>{
      if(time === this.timeOfLife){
        toast.visible = false;
        setTimeout(() => {
          this.closeToast(toast);
        }, 500);
        
      }
    });
    toast.timer.start();
    this.toasts.value.push(toast);
    this.toasts.next(this.toasts.value);
  }

  closeToast(toast:Toast){
    toast.timer?.stop();
    let indexToDelete = this.toasts.value.findIndex(x=>x.id === toast.id);
    if(indexToDelete>-1){
      this.toasts.value.splice(indexToDelete,1);
      this.toasts.next(this.toasts.value);
    }
    
  }

  isHoveringElement(toast:Toast,isHovering:boolean){
    if(isHovering ){
      toast.timer?.pause();
    }else{
      toast.timer?.start();
    }
  }


}
