import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { LoginPage } from "./login.page";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: LoginPage,
  },
];

const IMPORTS = [
  CommonModule,
  FormsModule,
  IonicModule,
  RouterModule.forChild(routes),
  FormsModule,
  ReactiveFormsModule,
];

const DECLARATIONS = [LoginPage];

@NgModule({
  imports: IMPORTS,
  declarations: DECLARATIONS,
})
export class LoginPageModule {}
