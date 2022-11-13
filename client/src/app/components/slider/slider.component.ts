import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  template: `  
 <div class="slider">
   <div [style]="bgColor?('background:linear-gradient(to right,  '+bgColor+' 0%,rgba(255,255,255,0) 100%);'):''" class="slider__blur slider__blur__left"></div>
   <div [style]="bgColor?('background:linear-gradient(to left,  '+bgColor+' 0%,rgba(255,255,255,0) 100%);'):''" class="slider__blur slider__blur__right"></div>
	<div class="slide-track flex">
		<div *ngFor="let item of value" class="slide  divide-x-2">
			<img [src]="(item.src+(darkMode?'-dark':'')+'.svg')" class="max-w-[9rem]" height="auto" width="auto" alt="" />
		</div>
	</div>
</div>
`,
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }
  @Input() darkMode:boolean = false;
  treshold:number = 11;
  @Input() value:any[] = [
    {
    src:"assets/images/logos/angular.svg",
    name:'Angular',
    }
];

  @Input() bgColor:string|null='white';

  buildArray(){
    let i = 0;
    while(this.value.length<18){
      this.value.push(this.value[i]);
      i++;
    }
  }


  ngOnInit(): void {
    this.buildArray();
  }

}
