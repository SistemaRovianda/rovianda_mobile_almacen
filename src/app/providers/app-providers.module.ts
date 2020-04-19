import { NgModule } from "@angular/core";
import { environment } from "src/environments/environment";
import { API_ENDPOINT_PROVIDER } from "./tokens";

@NgModule({
  imports: [],
  providers: [
    {
      provide: API_ENDPOINT_PROVIDER,
      useValue: environment.basePath,
    },
  ],
})
export class AppProvidersModule {}
