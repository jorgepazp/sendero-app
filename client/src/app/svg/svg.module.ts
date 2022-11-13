import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsometricCubesComponent } from './isometric-cubes/isometric-cubes.component';
import { SceneComponent } from './scene/scene.component';
import { Logo } from './logo/logo.component';



@NgModule({
  declarations: [
    IsometricCubesComponent,
    SceneComponent,
    Logo
  ],
  imports: [
    CommonModule
  ],exports:[
    IsometricCubesComponent,
    SceneComponent,
    Logo
  ]
})
export class SvgModule { }
