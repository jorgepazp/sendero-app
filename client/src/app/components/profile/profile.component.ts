import { Component, OnInit } from '@angular/core';
import SimpleParallax from 'simple-parallax-js';

interface Parallax{
  orientation:'down'|'up'|'left'|'right',
  scale:number,
  overflow:boolean
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
    this.createParallaxObject('blobs','right',1.5);
    this.createParallaxObject('blobs-2','right',1.2);
    this.createParallaxObject('blobs-4','right',1.4);
    this.createParallaxObject('image','right',1.4);

  }

  createParallaxObject(className:string,orientation:'down'|'up'|'left'|'right',scale:number = 1){
    let image = document.getElementsByClassName(className);

    return new SimpleParallax(image,{
      orientation:orientation,
      overflow:true,
      scale:scale
    });
  }

}
