import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import * as fromPackagingActions from "./packaging.actions";
import { exhaustMap, delay, switchMap, tap, catchError } from "rxjs/operators";
import { LotsService } from "src/app/shared/Services/lots.service";
import { ProductService } from "src/app/shared/Services/product.service";
import { Router } from "@angular/router";
import { from, of } from "rxjs";

@Injectable()
export class PackagingEffects {
  constructor(
    private action$: Actions,
    private lotsService: LotsService,
    private productsService: ProductService,
    private router: Router
  ) {}

  loadLotsEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromPackagingActions.packagingStartLoad),
      exhaustMap((action) =>
        this.lotsService.getLots(action.lotsType, action.status).pipe(
          delay(5000),
          switchMap((lots) => [
            fromPackagingActions.packagingLoadLots({ lots }),
            fromPackagingActions.packagingFinishLoad(),
          ])
        )
      )
    )
  );

  loadProductsEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromPackagingActions.packagingSelectLot),
      exhaustMap((action) =>
        this.productsService
          .getProducts(action.lot)
          .pipe(
            switchMap((products) => [
              fromPackagingActions.packagingLoadProducts({ products }),
              fromPackagingActions.packagingFinishLoad(),
            ])
          )
      )
    )
  );

  loadSuccessEffect = createEffect(() =>
    this.action$.pipe(
      ofType(fromPackagingActions.packagingLoadSuccess),
      exhaustMap((action) =>
        from(this.router.navigate(["/packaging/menu"])).pipe(
          switchMap((result) =>
            result
              ? [fromPackagingActions.packagingFinishLoad()]
              : [
                  fromPackagingActions.PackagingFailure({
                    errors: "Usuario no valido",
                  }),
                ]
          ),
          catchError((errors) =>
            of(
              fromPackagingActions.packagingFinishLoad(),
              fromPackagingActions.PackagingFailure(errors)
            )
          )
        )
      )
    )
  );
}
