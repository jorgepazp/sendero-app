import { Component, Input } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Stack } from '../../models/stack.interface';

@Component({
  selector: 'stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent {

  constructor(private ns:NavigationService) { }

  @Input() data:Stack = {};
  open(a:any){
    this.ns.openObject(a);
  }
}
