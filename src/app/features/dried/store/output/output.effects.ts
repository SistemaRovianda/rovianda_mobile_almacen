import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { DriedService } from "src/app/shared/Services/dried.service";
import * as fromActions from "./output.actions";

@Injectable({
  providedIn: "root",
})
export class OutputEffects {
  constructor(private actions$: Actions, private driedService: DriedService) {}

  openLote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.output),
      exhaustMap((action) =>
        this.driedService.exitLot(action.payload).pipe(
          map((payload) => fromActions.outputSuccess({ payload })),
          catchError((error) => of(fromActions.outputError(error)))
        )
      )
    )
  );
}
