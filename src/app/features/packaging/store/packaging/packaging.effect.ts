import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import * as fromPackagingActions from "./packaging.actions";
import { exhaustMap, delay, switchMap, tap, catchError } from "rxjs/operators";
import { LotsService } from "src/app/shared/Services/lots.service";
import { ProductService } from "src/app/shared/Services/product.service";
import { Router } from "@angular/router";
import { from, of } from "rxjs";
import { ToastService } from "src/app/shared/Services/toast.service";

@Injectable()
export class PackagingEffects {
  constructor(
    private action$: Actions,
    private lotsService: LotsService,
    private productsService: ProductService,
    private toastService: ToastService,
    private router: Router
  ) {}

  loadProductsEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromPackagingActions.packagingStartLoad),
      exhaustMap((action) =>
        this.productsService.getProducts(action.lotsType, action.status).pipe(
          delay(5000),
          switchMap((products) => [
            fromPackagingActions.packagingLoadProducts({ products }),
            fromPackagingActions.packagingFinishLoad(),
          ])
        )
      )
    )
  );

  // loadProductsEffect$ = createEffect(() => 
  //         this.action$.pipe(
  //           ofType(fromPackagingActions.packagingLoadLots)
  //         )
  // )

  loadLotsEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromPackagingActions.packagingSelectLot),
      exhaustMap((action) =>
        this.lotsService
          .getLots(action.productId, action.typeLots)
          .pipe(
            switchMap((lots) => [
              fromPackagingActions.packagingLoadLots({ lots }),
              fromPackagingActions.packagingFinishLoad(),
            ])
          )
      )
    )
  );

  loadSuccessEffect = createEffect(
    () =>
      this.action$.pipe(
        ofType(fromPackagingActions.packagingLoadSuccess),
        exhaustMap((action) => {
          this.toastService.presentToastPackingSuccess();
          return [];
        }),
        catchError((errors) => {
          this.toastService.presentToastError();
          return [];
        })
      ),
    {
      dispatch: false,
    }
  );
}
