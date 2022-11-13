import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  animations:[
    trigger('entrance',[
        transition(':enter',[
          style({opacity: 0, transform: 'translateY(-10%)'}),
          animate('0.5s cubic-bezier(.57,-0.35,.53,1.3)'),
          style({opacity: 1, transform: 'translateY(0)'})
        ]),
        transition(':leave',[
          style({opacity: 1, transform: 'translateY(0)'}),
          animate('0.5s cubic-bezier(.57,-0.35,.53,1.3)', style({opacity: 0, transform: 'translateY(-10%)'}))
        ]),
    ])
  ]
})
export class SelectComponent implements OnInit {
  @Input() data:any[] = [

]

isSafari:boolean = false;
  hoveredItem:any = null;

  @Input()  selected:any = null;
  @Output() selectedChange = new EventEmitter<any>();
  focus:boolean = false;
  constructor() { 
    if(navigator.userAgent.indexOf("Safari") != -1) this.isSafari = true;

  }

  ngOnInit(): void {
  }

  onFocus(){
    this.focus = true;
  }

  onBlur(event:FocusEvent){
    event.stopPropagation();
    if(this.hoveredItem){
      this.hoveredItem.selected = true;
      this.selected && delete this.selected.selected
      this.selected = this.hoveredItem
      this.selectedChange.emit(this.selected)

    }
    this.focus = false;
  }

  in(item:any,index:number){
    this.hoveredItem = item;
  }

  out(){
    this.hoveredItem = null;
  }
}
