import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import SimpleParallax from 'simple-parallax-js';
import { Toast } from 'src/app/components/toast/toast.interface';
import { ToastService } from 'src/app/components/toast/toast.service';
import { ApiService } from 'src/app/services/api.service';
import { Timer } from 'src/app/util/timer';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  isSaving:boolean = false;
  didContact:boolean = false;
  form!:FormGroup;
  constructor(
    private api:ApiService,
    private toast:ToastService,
    private fb:FormBuilder,
    private translate:TranslateService
  ) { }
  // contactForm
  ngOnInit(): void {
    // this.createParallaxObject('textview','up',5)
    this.buildContactForm();
  }

  buildContactForm(){
    this.form = this.fb.group({
      mail:['',[Validators.required,Validators.email]],
      name:['',[Validators.required,Validators.minLength(3)]],
      message:['',[Validators.maxLength(200)]]
      })
  }

  sendEmail(){
    this.isSaving = true;
    this.api.postMail(this.form.value).subscribe(res=>{     
      
      let msg:Toast = {
        color:"#10b981",
        description:this.translate.instant('MAIL.SUCCESS.DESC'),
        title:this.translate.instant('MAIL.SUCCESS.TITLE'),
        icon:'pi pi-check'
      }
      this.toast.openToast(msg);
      this.isSaving = false;
      this.didContact = true;
    },error=>{
      console.error();
      let err:Toast = {
        color:"#ef4444",
        description:this.translate.instant('MAIL.ERROR.DESC'),
        title:this.translate.instant('MAIL.ERROR.TITLE'),
        icon:'pi pi-times'
      }
      this.toast.openToast(err);
      setTimeout(() => {
        this.isSaving = false;
      }, 8000);


    })
  }


  // createParallaxObject(className:string,orientation:'down'|'up'|'left'|'right',scale:number = 1){
  //   let image = document.getElementsByClassName(className);

  //   return new SimpleParallax(image,{
  //     orientation:orientation,
  //     overflow:true,
  //     scale:scale,
  //     customWrapper:'custom-wrapper'
  //   });
  // }

}
