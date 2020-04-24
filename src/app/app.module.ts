import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { StoreModule } from "@ngrx/store";
import {
  reducers,
  metaReducers,
} from "./features/store/reducers/index.reducer";
import { EffectsModule } from "@ngrx/effects";
import { effects } from "./features/store/effects/index.effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from "@angular/common/http";
import { AppProvidersModule } from "./providers/app-providers.module";

const DECLARATIONS = [AppComponent];

const IMPORTS = [
  BrowserModule,
  IonicModule.forRoot(),
  AppRoutingModule,
  StoreModule.forRoot(reducers, {
    metaReducers,
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true,
    },
  }),
  EffectsModule.forRoot(effects),
  StoreDevtoolsModule.instrument({
    maxAge: 20,
  }),
  HttpClientModule,
  AppProvidersModule,
];

@NgModule({
  declarations: DECLARATIONS,
  entryComponents: [],
  imports: IMPORTS,
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
