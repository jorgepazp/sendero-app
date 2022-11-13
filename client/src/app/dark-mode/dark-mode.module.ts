import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import { DarkModeService } from './dark-mode.service';
import { ComponentsModule } from '../components/components.module';
import { ToggleModule } from '../components/toggle/toggle.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ThemeSwitchComponent
  ],
  imports: [
    CommonModule,
    ToggleModule,
    TranslateModule
  ],
  providers:[
    DarkModeService],
  exports:[
    ThemeSwitchComponent
  ]
})
export class DarkModeModule { }
