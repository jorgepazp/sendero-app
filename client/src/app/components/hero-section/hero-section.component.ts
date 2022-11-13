import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html'
})
export class HeroSectionComponent implements OnInit {

  constructor(public ns:NavigationService) { }

  ngOnInit(): void {
  }


}
