import * as Hammer from 'hammerjs';
import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
  HammerGestureConfig,
} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import {
  NgxUiLoaderModule,
  POSITION,
  SPINNER,
  PB_DIRECTION,
  NgxUiLoaderConfig,
  NgxUiLoaderRouterModule,
  NgxUiLoaderHttpModule,
} from 'ngx-ui-loader';

import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpClientXsrfModule,
} from '@angular/common/http';

import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CoreModule } from './core/core.module';
import { CabecalhoComponent } from './shared/layout/cabecalho/cabecalho.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextMaskModule } from 'angular2-text-mask';
import { UploadFileSITCS } from './components/upload-file-sitcs/upload-file-sitcs.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableExporterModule } from 'mat-table-exporter';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CurrencyMaskModule } from 'ngx-currency-mask';
import{CertidaoSindicalComponent} from './main/certidao-sindical/certidao-sindical.component'
import{EmitirCertidaoComponent} from './main/certidao-sindical/emitir-certidao/emitir-certidao.component'
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import {
  CurrencyMaskConfig,
  CURRENCY_MASK_CONFIG,
} from 'ngx-currency-mask/src/currency-mask.config';
import { from } from 'rxjs';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = {
    swipe: { direction: Hammer.DIRECTION_HORIZONTAL },
  } as any;
}

registerLocaleData(localePt, 'pt-BR');

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#2969bd',
  bgsOpacity: 1.0,
  bgsPosition: 'bottom-right',
  bgsSize: 60,
  bgsType: 'ball-spin-clockwise',
  blur: 5,
  fgsColor: '#2969bd',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: 'ball-spin',
  gap: 24,
  logoPosition: 'center-center',
  logoSize: 120,
  logoUrl: '',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: '#2969bd',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: true,
  text: 'Aguarde enquanto o arquivo é processado...',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
};

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'left',
  allowNegative: true,
  allowZero: true,
  decimal: ',',
  precision: 2,
  prefix: '',
  suffix: '',
  thousands: '.',
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CabecalhoComponent,
    CertidaoSindicalComponent,
    EmitirCertidaoComponent,
    UploadFileSITCS,
    LoginComponent,
    CadastroComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    NgxUiLoaderModule,
    RecaptchaModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,
    AppRoutingModule,
    RecaptchaV3Module,
    FormsModule,
    HttpClientXsrfModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
    TextMaskModule,
    FlexLayoutModule,
    MatTableExporterModule,
    CurrencyMaskModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '<YOUR_SITE_KEY>' },
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
