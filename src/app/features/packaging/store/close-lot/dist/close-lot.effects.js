"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CloseLotEffects = void 0;
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var fromPackagingActions = require("src/app/features/packaging/store/packaging/packaging.actions");
var close_lot_actions_1 = require("./close-lot.actions");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var CloseLotEffects = /** @class */ (function () {
    function CloseLotEffects(action$, packing) {
        var _this = this;
        this.action$ = action$;
        this.packing = packing;
        this.loadCloseLotEffects = effects_1.createEffect(function () {
            return _this.action$.pipe(effects_1.ofType(close_lot_actions_1.closeLotStartLoad), operators_1.exhaustMap(function (action) {
                return _this.packing.entrance(action.lot).pipe(operators_1.delay(3000), operators_1.switchMap(function (_) { return [fromPackagingActions.packagingLoadSuccess()]; }), operators_1.catchError(function (errors) {
                    return rxjs_1.of(fromPackagingActions.packagingFinishLoad(), fromPackagingActions.PackagingFailure(errors));
                }));
            }));
        });
    }
    CloseLotEffects = __decorate([
        core_1.Injectable()
    ], CloseLotEffects);
    return CloseLotEffects;
}());
exports.CloseLotEffects = CloseLotEffects;
