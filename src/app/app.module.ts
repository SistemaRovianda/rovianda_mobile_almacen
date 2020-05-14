import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppProvidersModule } from "./providers/app-providers.module";
import { reducers, metaReducers } from "./shared/store/reducers/index.reducer";
import { effects } from "./shared/store/effects/index.effects";

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
