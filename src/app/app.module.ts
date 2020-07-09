import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularFireAuthModule } from "@angular/fire/auth";
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
import { AuthGuard } from "./shared/guards/auth.guard";
import { IsAuthGuard } from "./shared/guards/is-auth.guard";
import { effects } from "./shared/store/effects/index.effects";
import { metaReducers, reducers } from "./shared/store/reducers/index.reducer";
import { IonicStorageModule } from "@ionic/storage";

const DECLARATIONS = [AppComponent];

const IMPORTS = [
  BrowserModule,
  IonicModule.forRoot({
    scrollPadding: true,
    scrollAssist: true,
    inputBlurring: true,
    inputShims: true,
  }),
  AppRoutingModule,
  AngularFireAuthModule,
  IonicStorageModule.forRoot(),
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
    AuthGuard,
    IsAuthGuard,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AppProvidersModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
