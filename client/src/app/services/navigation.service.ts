import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {


  overlay:BehaviorSubject<any> = new BehaviorSubject<any>({status:false,scrollTop:0});
 constructor(){}

  scrollToComponent(el:HTMLElement){
    el.scrollIntoView({behavior:'smooth'});
  }

  setOverlay(arg:any){
    this.overlay.next(arg);
  }

  scrollToId(id:string){
    let el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth'});
  }



  scrollFromOverlay(id:string){
    this.overlay.next({status:false,scrollTop:0});
    setTimeout(() => {
      this.scrollToId(id)
    }, 100);
    
    // this.overlay.next({status:false,scroll})
  }

  openObject(config:unknown){
    this.overlay.next(config)
  }


}
