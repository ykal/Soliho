import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CompanyServiceComponent } from './company-service/company-service.component';
import { APP_ROUTES } from './app.route';
import { HomepageComponent } from './homepage/homepage.component';
import { SliderComponent } from './slider/slider.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    CompanyServiceComponent,
    HomepageComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(APP_ROUTES, {useHash: false}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
