import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "src/app/shared/services/product.service";
import * as fromExitActions from "./exit.actions";
import { exhaustMap, delay, switchMap, catchError } from "rxjs/operators";
import { of, from } from "rxjs";
import { PackagingService } from "src/app/shared/services/packaging.service";
import { Router } from "@angular/router";
import { ToastService } from "src/app/shared/services/toast.service";

@Injectable()
export class ExitEffects {
  constructor(
    private action$: Actions,
    private productsService: ProductService,
    private packagingService: PackagingService,
    private toastService: ToastService,
    private router: Router
  ) {}

  exitStarLoadEffects = createEffect(() =>
    this.action$.pipe(
      ofType(fromExitActions.exitStartLoad),
      exhaustMap((action) =>
        this.productsService.getAllProductsPacking().pipe(
          delay(3000),
          switchMap((products) => [
            fromExitActions.exitLoadProducts({ products }),
            fromExitActions.exitFinishLoad(),
          ]),
          catchError((error) =>
            of(
              fromExitActions.exitFinishLoad(),
              fromExitActions.exitFailureLoad(error)
            )
          )
        )
      )
    )
  );

  exitLoadRequestEffects = createEffect(() =>
    this.action$.pipe(
      ofType(fromExitActions.exitLoadRequest),
      exhaustMap((action) =>
        this.packagingService.exit(action.request).pipe(
          delay(4000),
          switchMap((_) => [
            fromExitActions.exitLoadRequestSuccess(),
            fromExitActions.exitFinishLoad(),
          ]),
          catchError((error) => {
            this.toastService.presentToastError();
            return of(
              fromExitActions.exitFinishLoad(),
              fromExitActions.exitFailureLoad(error)
            );
          })
        )
      )
    )
  );

  exitLoadRequestSuccessEffects = createEffect(() =>
    this.action$.pipe(
      ofType(fromExitActions.exitLoadRequestSuccess),
      exhaustMap((action) => {
        this.toastService.presentToastPackingSuccess();
        return [];
      }),
      catchError((errors) => {
        return [];
      })
    )
  );
}
