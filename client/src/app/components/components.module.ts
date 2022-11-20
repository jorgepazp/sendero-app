import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SvgModule } from '../svg/svg.module';
import { ProjectComponent } from './project/project.component';
import { ProfileComponent } from './profile/profile.component';
import { PreTitleComponent } from './pre-title/pre-title.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OverlayLayerComponent } from './overlay-layer/overlay-layer.component';
import { StackComponent } from './stack/stack.component';
import { DarkmodeToggleComponent } from './darkmode-toggle/darkmode-toggle.component';
import { ToggleModule } from './toggle/toggle.module';
import { DarkModeModule } from '../dark-mode/dark-mode.module';
import { SelectComponent } from './select/select.component';
import { LanguageComponent } from './language/language.component';
import { TranslateModule } from '@ngx-translate/core';
import { SliderModule } from './slider/slider.module';
import { TimelineModule } from './timeline/timeline.module';
import { ToastComponent } from './toast/toast.component';
import { ToastModule } from './toast/toast.module';
import { RouterModule } from '@angular/router';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeroSectionComponent,
    ProjectComponent,
    ProfileComponent,
    PreTitleComponent,
    NavbarComponent,
    OverlayLayerComponent,
    StackComponent,
    DarkmodeToggleComponent,
    SelectComponent,
    LanguageComponent,
    NewsletterComponent,
    ProductFilterComponent,
    ],
  imports: [
    CommonModule,
    SvgModule,
    ToggleModule,
    DarkModeModule,
    TranslateModule,
    SliderModule,
    RouterModule,
    TimelineModule,
    ToastModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    HeroSectionComponent,
    ProjectComponent,
    ProfileComponent,
    PreTitleComponent,
    OverlayLayerComponent,
    NavbarComponent,
    LanguageComponent,
    ToastModule,
    ProductFilterComponent,
    NewsletterComponent
  ]
})
export class ComponentsModule { }
