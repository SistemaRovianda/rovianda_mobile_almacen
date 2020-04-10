import { Component, OnInit } from "@angular/core";
import { AbstractControl, Validators, FormBuilder } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import * as fromLoginActions from "src/app/features/landing/store/login/login.action";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {}

  loginForm = this.fb.group({
    email: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });

  loanding: boolean;

  ngOnInit() {}

  recoverPassword() {
    console.log("evento recover password");
  }

  onLogin() {
    console.log(this.loginForm.value);
    this.store.dispatch(fromLoginActions.signIn(this.loginForm.value));
  }

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }
}
