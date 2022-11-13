import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pre-title',
  template: `
  <div  data-aos="fade-in" data-aos-delay="0" class="flex items-center mb-5 ">
    <div class="h-0.5 w-10 bg-primary-600 dark:bg-primary-300 mr-5">
    </div>
    <span class="font-semibold text-primary-600 dark:text-primary-300 font-mono text-2xl">{{text}}</span>
  </div>
  `,
})
export class PreTitleComponent {
  @Input() text:string = '';
  constructor() { }
}
