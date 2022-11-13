import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/dark-mode/dark-mode.service';
import { skillset, Stack } from 'src/app/models/stack.interface';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html'
})
export class MySkillsComponent implements OnInit {
  skillset:Stack[] = skillset; 
  constructor(public darkMode:DarkModeService) { }

  ngOnInit(): void {
  }
}
