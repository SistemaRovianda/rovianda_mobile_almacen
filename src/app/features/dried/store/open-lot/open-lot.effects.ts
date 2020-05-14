import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, switchMap, map } from "rxjs/operators";
import { Entrance } from "src/app/shared/Models/dried.interface";
import { DriedService } from "src/app/shared/Services/dried.service";
import * as fromActions from "./open-lot.actions";

@Injectable({
  providedIn: "root",
})
export class OpenLotEffects {
  constructor(private actions$: Actions, private driedService: DriedService) {}

  openLote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.openLot),
      exhaustMap((action) =>
        this.driedService.openLot(action.payload).pipe(
          map((payload) => fromActions.openLotSuccess({ payload })),
          catchError((error) => of(fromActions.openLotError(error)))
        )
      )
    )
  );
}
