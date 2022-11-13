import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  data:any[] = [];
  selected:any = {};
  constructor(translate:TranslateService,public language:LanguageService) {
    this.data = language.getAvailableLangs();
    this.selected = language.selected.value;
  }

  ngOnInit(): void {
  }

  changeLang(lang:any){
    this.language.selectLanguage(lang.data);
  }
}
