import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.svg',
})
export class Logo   {
  
  @Input() color:'white'|'black' = 'black';


}
