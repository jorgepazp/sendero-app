import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

export const languages = [
  {
    data:'en',
    name:"English",
    src:'assets/images/uk.svg'
  },
    {
    data:'es',
    name:'Español',
    src:'assets/images/cl.svg'
    }
]

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  languages:any[]=languages;
  selected:BehaviorSubject<any> = new BehaviorSubject(undefined);

  constructor(private translate:TranslateService) {
    this.selected.subscribe(x =>{
      if(x){
        this.translate.use(x.data);
      }
    })
    let lang = navigator.language;
    this.selected.next(this.languages.find(x=>lang.slice(0,2).indexOf(x.data)>=0));
    if(!this.selected.value) this.selected.next( this.languages[0]);
   }

   getAvailableLangs(){
     return this.languages;
   }

   selectLanguage(i18n:string){
     let lang = this.languages.find(x=>i18n.indexOf(x.data)>=0);
     if(lang){
      this.selected.next(lang);
      this.translate.use(lang.data);
     }
   }

}
