import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Basic } from 'src/app/models/basic.interface';

@Component({
  selector: 'app-my-history',
  templateUrl: './my-history.component.html',
  styleUrls: ['./my-history.component.scss']
})
export class MyHistoryComponent implements OnInit {

  data:Basic[] = [{
    key:"UBB",
    period:'2015-2020'
    
  },
  {
    key:"CLK",
    period:'2020-2021'
    
  },
  {
    key:"EFX",
    period:'2021-Actualidad'
    
  },

];
  constructor(private ts: TranslateService) { }

  ngOnInit(): void {
    this.ts.onLangChange.subscribe(x=>{
      this.data = this.buildData(this.data);
    })
  }
  
  buildData=(data:Basic[])=>{
    return data.map(x=>{
      x.title = this.ts.instant(`CAREER.${x.key}.TITLE`);
      x.subtitle = this.ts.instant(`CAREER.${x.key}.SUBTITLE`);
      x.description = this.ts.instant(`CAREER.${x.key}.DESCRIPTION`);
      return x;
    })
  }
}
