import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import localEsCo from '@angular/common/locales/es-CO';
import localJa from '@angular/common/locales/ja';
import localRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEsCo);
registerLocaleData(localJa);
registerLocaleData(localRu);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,   
    SharedModule,
    AppRouterModule,
    VentasModule     
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-CO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
