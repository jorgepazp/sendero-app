import { Component, OnInit } from '@angular/core';
import SimpleParallax from 'simple-parallax-js';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let pyramidHat = document.getElementsByClassName('pyramid-2');
    new SimpleParallax(pyramidHat);
  }

}
