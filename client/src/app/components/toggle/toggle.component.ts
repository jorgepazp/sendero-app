import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit, OnChanges {
  @ViewChild('switch') switch:ElementRef | undefined;
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();
  @Input() color:[string,string] = ['#0f172a','#a5b4fc']
  onChange(e:any){
    this.checkedChange.emit(e)
  }

  ngOnChanges(){
  }

  constructor() { }

  ngOnInit(): void {
  }

}
