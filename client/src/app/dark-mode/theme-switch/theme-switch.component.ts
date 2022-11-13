import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent implements OnInit {

  theme:boolean = false;
  canSwitch:any = null;

  constructor(private dm:DarkModeService) { 
    this.theme = dm.theme.value;
  }

  ngOnInit(): void {
  }

  toggle(){
    this.dm.toggle();
  }

  debounce<Params extends any[]>(
    func: (...args: Params) => any,
    timeout: number,
  ): (...args: Params) => void {
    let timer: NodeJS.Timeout
    return (...args: Params) => {
      clearTimeout(timer)
      timer = setTimeout(() => {

        func(...args)
      }, timeout)
    }
  }


}
