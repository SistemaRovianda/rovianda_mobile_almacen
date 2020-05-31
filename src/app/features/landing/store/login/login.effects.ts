import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { from, of } from "rxjs";
import { catchError, delay, exhaustMap, switchMap, tap } from "rxjs/operators";
import * as fromLoginActions from "src/app/features/landing/store/login/login.action";
import * as fromUserActions from "src/app/features/landing/store/user/user.action";
import { AuthService } from "src/app/shared/Services/auth.service";
import { dispatch } from "rxjs/internal/observable/pairs";

@Injectable()
export class LogginEffects {
  constructor(
    private action$: Actions,
    private _authService: AuthService,
    private _router: Router
  ) {}

  signInEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromLoginActions.signIn),
      delay(2000),
      exhaustMap((action) =>
        this._authService.signIn(action.email, action.password).pipe(
          switchMap(({ uid, token }) => {
            return [
              fromLoginActions.startLoad(),
              fromUserActions.loadUser({ uid, token }),
              fromUserActions.loadCurrentToken({
                uid,
              }),
            ];
          }),
          catchError((error) =>
            of(
              fromLoginActions.finishLoad(),
              fromLoginActions.signInFailure({ error: error.message })
            )
          )
        )
      )
    )
  );

  loadCurrentTokenEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromUserActions.loadCurrentToken),
      exhaustMap((action) =>
        this._authService.getTokenCurrentUser().pipe(
          switchMap(({ currentToken }) => {
            localStorage.setItem("token", currentToken);
            return [
              fromUserActions.loadUser({ currentToken }),
              fromLoginActions.signAuthSuccess({ uid: action.uid }),
            ];
          }),
          catchError((error) =>
            of(
              fromLoginActions.finishLoad(),
              fromLoginActions.signInFailure(error)
            )
          )
        )
      )
    )
  );

  signAuthSuccessEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromLoginActions.signAuthSuccess),
      exhaustMap((action) =>
        this._authService.getUserData(action.uid).pipe(
          delay(3000),
          switchMap(({ name, lastSurname, firstSurname, email, rol }) => {
            localStorage.setItem("role", rol);
            return [
              fromUserActions.loadUser({
                name,
                lastSurname,
                firstSurname,
                rol,
              }),
              fromLoginActions.signInSuccess(),
            ];
          }),
          catchError((error) =>
            of(
              fromLoginActions.finishLoad(),
              fromLoginActions.signInFailure(error)
            )
          )
        )
      )
    )
  );

  signInSuccessEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromLoginActions.signInSuccess),
      exhaustMap((action) =>
        from(this._router.navigate(["/menu"])).pipe(
          switchMap((result) =>
            result
              ? [fromLoginActions.finishLoad()]
              : [fromLoginActions.signInFailure({ error: "Usuario no valido" })]
          ),
          catchError((error) =>
            of(
              fromLoginActions.finishLoad(),
              fromLoginActions.signInFailure(error)
            )
          )
        )
      )
    )
  );

  signInFailureEffect$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(fromLoginActions.signInFailure),
        tap((action) => localStorage.clear())
      ),
    {
      dispatch: false,
    }
  );

  signOutEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromLoginActions.signOut),
      exhaustMap((action) =>
        this._authService.signOut().pipe(
          switchMap((res) => [fromUserActions.clearUser()]),
          catchError((err) => of(fromLoginActions.signInFailure(err)))
        )
      )
    )
  );
}
