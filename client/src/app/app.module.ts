import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { SliderModule } from './components/slider/slider.module';
import { TimelineModule } from './components/timeline/timeline.module';
import { DarkModeModule } from './dark-mode/dark-mode.module';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MyHistoryComponent } from './pages/my-history/my-history.component';
import { MySkillsComponent } from './pages/my-skills/my-skills.component';
import { LanguageService } from './services/language.service';
import { SvgModule } from './svg/svg.module';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ContactComponent,
    MySkillsComponent,
    MyHistoryComponent,
    CheckoutComponent,
    CartComponent,
    ProductComponent,
    HomeComponent,
    ProductDetailComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    SvgModule,
    SliderModule,
    TimelineModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DarkModeModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
