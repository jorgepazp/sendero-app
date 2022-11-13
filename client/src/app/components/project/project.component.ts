import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/dark-mode/dark-mode.service';
import { skillset, Stack } from 'src/app/models/stack.interface';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  skillset:Stack[] = skillset; 
  constructor(public darkMode:DarkModeService) { }

  ngOnInit(): void {
  }

}
