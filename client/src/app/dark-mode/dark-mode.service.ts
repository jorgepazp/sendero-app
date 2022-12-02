import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private renderer: Renderer2;
  theme = new BehaviorSubject<boolean>(false);
  bgColor = new BehaviorSubject<string>('#e0e7ff');

  get currentBg(){
    return this.bgColor.value;
  }

  get darkModeEnabled(){
    return this.theme.value;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    //TODO: removed as not needed
    // this.decideInitialScheme();
  }

  decideInitialScheme(){
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const scheme = localStorage.getItem('scheme')?(localStorage.getItem('scheme')!=='false'):null;

    if((scheme!==null)){
      this.setScheme(scheme as unknown as boolean)
    }else if(userPrefersDark || userPrefersLight){
      this.setScheme(userPrefersDark?true:false);
    }else{
     this.setScheme(false); 
    }
  }

  setScheme(value:boolean){
    this.theme.next(value);
    this.storeScheme(value);
    console.log(value)
    if(value){
      this.renderer.addClass(this.document.body,'dark');
      this.bgColor.next('#0f172a');
    }else{
    this.renderer.removeClass(this.document.body,'dark');
    this.bgColor.next('#e0e7ff');
    }
  }
  

  storeScheme(value:boolean){
    localStorage.setItem('scheme',value+'');
  }


  toggle(){
    this.setScheme(!this.theme.value)
    // let current = this.theme.value;
    // if(current){
    //   this.renderer.addClass(this.document.body,'dark');
    // }else{
    // this.renderer.removeClass(this.document.body,'dark');
    // }
  }



}
