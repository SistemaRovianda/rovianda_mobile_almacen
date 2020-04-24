import { Component, OnInit } from "@angular/core";
import { AbstractControl, Validators, FormBuilder } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import * as fromLoginActions from "src/app/features/landing/store/login/login.action";
import {
  SELECT_IS_LOADING,
  SELECT_LOGIN_ERROR,
} from "../../store/login/login.selector";
import { emailValidator } from "src/app/shared/Validators/email.validator";
import { passwordValidator } from "src/app/shared/Validators/password.validator";
import { StoreValidator } from "src/app/shared/Validators/store.validator";

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

  loginForm = this.fb.group(
    {
      email: ["", [Validators.required, emailValidator]],
      password: ["", [Validators.required, passwordValidator]],
    },
    {
      asyncValidators: [
        StoreValidator.hasStoreError(
          this.store.select(SELECT_LOGIN_ERROR),
          "Login error"
        ),
      ],
    }
  );

  loading: boolean;

  ngOnInit() {
    this.store
      .select(SELECT_IS_LOADING)
      .subscribe((tempLoading) => (this.loading = tempLoading));
  }

  recoverPassword() {
    console.log("evento recover password");
  }

  onLogin() {
    this.store.dispatch(fromLoginActions.signIn(this.loginForm.value));
  }

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }
}
