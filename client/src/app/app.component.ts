import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit, TemplateRef } from '@angular/core';
import * as AOS from 'aos'; //<------ Add this line
import { LanguageService } from './services/language.service';
import { NavigationService } from './services/navigation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  previousScroll: number = 0;
  get currentScroll(): number { return scrollY }
  get offsetTop(): number { return window.pageYOffset }
  direction: boolean = true; //true for upwards
  sticky: boolean = true;
  scrollTop: number = 0;
  overlay: boolean = false;
  delayHide: boolean = false;
  lockScroll:boolean = false;
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.direction = this.previousScroll > this.currentScroll
    this.previousScroll = this.currentScroll;
    this.sticky = this.offsetTop >= 0
  }

  constructor(private ns: NavigationService,
    private lang:LanguageService) {
    AOS.init(); //<------ Add this line
    ns.overlay.subscribe(x => {
      this.overlay = x.status;
      this.scrollTop = x.scrollTop;
      setTimeout(() => {
        if(this.overlay){
          this.lockScroll = true;
          this.delayHide = true;
          
        } 
        else{
          this.delayHide = false;
          this.lockScroll = false;

          setTimeout(() => {
            scrollBy(0, this.scrollTop)            

          }, 0);
        } 
      }, this.overlay?500:0)
    });
  }
  ngOnInit() {
  }

}
