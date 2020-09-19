import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "../Services/auth.service";
import { mergeMap } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class IsAuthGuard implements CanActivate {
  constructor(private _authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | import("@angular/router").UrlTree
    | import("rxjs").Observable<boolean | import("@angular/router").UrlTree>
    | Promise<boolean | import("@angular/router").UrlTree> {
    return this.checkLogin();
  }

  checkLogin(): Observable<boolean> {
    return this._authService.isAuth().pipe(
      mergeMap(
        (val) => this._authService.verifyRole(),
        (val1, val2) => {
          return !val1 && !val2 ? true : false;
        }
      )
    );
  }
}
