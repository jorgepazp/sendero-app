import { Component, HostListener, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() direction:boolean=true; //true for upwards
  @Input() sticky:boolean = false;


  constructor(private ns:NavigationService) { }


  ngOnInit(): void {
  }

  openMenu(){
    this.ns.overlay.next({status:true,scrollTop:document.documentElement.scrollTop});
  }

}
