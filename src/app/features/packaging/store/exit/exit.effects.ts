import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "src/app/shared/Services/product.service";
import * as fromExitActions from "./exit.actions";
import { exhaustMap, delay, switchMap, catchError } from "rxjs/operators";
import { of, from } from "rxjs";
import { PackagingService } from "src/app/shared/Services/packaging.service";
import { Router } from "@angular/router";

@Injectable()
export class ExitEffects {
  constructor(
    private action$: Actions,
    private productsService: ProductService,
    private packagingService: PackagingService,
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

  exitLoadRequestSuccessEffects = createEffect(() =>
    this.action$.pipe(
      ofType(fromExitActions.exitLoadRequestSuccess),
      exhaustMap((_) =>
        from(this.router.navigate(["/packaging/report"])).pipe(
          switchMap((result) =>
            result
              ? [fromExitActions.exitFinishLoad()]
              : [
                  fromExitActions.exitFailureLoad({
                    error: "Usuario no valido",
                  }),
                ]
          ),
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
}
