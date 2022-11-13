import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, TemplateRef } from '@angular/core';
import { DarkModeService } from 'src/app/dark-mode/dark-mode.service';
import { NavigationService } from 'src/app/services/navigation.service';

interface _Theme{
  background:string,
  text:string,
}

interface _Config{
  theme?:_Theme,
  closeUrl?:string,
  template:TemplateRef<any>|null
}

const defaultConfig:_Config ={
  template:null
}

@Component({
  selector: 'app-overlay-layer',
  templateUrl: './overlay-layer.component.html',
  styleUrls: ['./overlay-layer.component.scss'],
  animations:[
    trigger("animatedEntrance",[
      transition(':enter', [
        style({top: "100vh"}),
        animate('0.5s ease'),
        style({top:"0"})
      ]),
      
    ])
  ]
})
export class OverlayLayerComponent implements OnInit,OnChanges {
  config:_Config = defaultConfig;
  get template(){return this.config.template;}
  get theme(){
    if(!this.config.theme) return defaultConfig.theme;
    let t = this.config.theme;
    return `${t.background?'background:'+t.background:null} ${t.text?'color:'+t.text:null} `;
  }

  routes:string[]=[
    "hero-section",
    'profile',
    'what-i-do',
    'project',
    "contact"
  ];
  @Input() isVisible:boolean = false;

  constructor(public ns:NavigationService,private dm:DarkModeService) {
    ns.overlay.subscribe(x=>{
      this.isVisible = x.status;
    });
   }

   
   
  ngOnInit(): void {
  
  }

  ngOnChanges(){

  }

  get darkmode():boolean{
    return this.dm.theme.value;
  }

  close(){
    this.ns.openObject({status:false,scrollTop:this.ns.overlay.value.scrollTop});
  }

  scroll(id:string){
    this.ns.scrollFromOverlay(id)
  }

}
