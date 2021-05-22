import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import * as fromLoginActions from "src/app/features/landing/store/login/login.action";
import {
  ERROR_EMAIL_NOT_FOUND,
  ERROR_PASSWORD_INVALID,
} from "src/app/providers/conts";
import { AppStateInterface } from "src/app/shared/models/app-state.interface";
import { StoreValidator } from "src/app/shared/validators/store.validator";
import { noWhiteSpace } from "src/app/shared/validators/whitespace.validator";
import {
  SELECT_IS_LOADING,
  SELECT_LOGIN_ERROR,
} from "../../store/login/login.selector";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {
    this.loginForm = this.fb.group(
      {
        email: ["", [Validators.required, Validators.email, noWhiteSpace]],
        password: ["", [Validators.required, noWhiteSpace]],
      },
      {
        asyncValidators: [
          StoreValidator.hasStoreError(
            this.store.select(SELECT_LOGIN_ERROR),
            "loginError"
          ),
        ],
      }
    );

    this.loading = false;
  }

  ngOnInit() {
    this.store
      .select(SELECT_IS_LOADING)
      .subscribe((tempLoading) => (this.loading = tempLoading));
  }

  recoverPassword() {}

  onLogin() {
    this.store.dispatch(fromLoginActions.signIn(this.loginForm.value));
  }

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }

  translateError(errorMessage: string): string {
    if (errorMessage == ERROR_EMAIL_NOT_FOUND) {
      return "Correo no registrado.";
    }
    if (errorMessage == ERROR_PASSWORD_INVALID) {
      return "Contraseña invalida.";
    }
    return "Varios intentos fallidos, consulte con el administrador o intente mas tarde";
  }
}
