"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PackagingEffects = void 0;
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var fromPackagingActions = require("./packaging.actions");
var operators_1 = require("rxjs/operators");
var PackagingEffects = /** @class */ (function () {
    function PackagingEffects(action$, lotsService, productsService, toastService, router) {
        var _this = this;
        this.action$ = action$;
        this.lotsService = lotsService;
        this.productsService = productsService;
        this.toastService = toastService;
        this.router = router;
        this.loadProductsEffect$ = effects_1.createEffect(function () {
            return _this.action$.pipe(effects_1.ofType(fromPackagingActions.packagingStartLoad), operators_1.exhaustMap(function (action) {
                return _this.productsService.getProducts(action.lotsType, action.status).pipe(operators_1.delay(5000), operators_1.switchMap(function (products) { return [
                    fromPackagingActions.packagingLoadProducts({ products: products }),
                    fromPackagingActions.packagingFinishLoad(),
                ]; }));
            }));
        });
        // loadProductsEffect$ = createEffect(() => 
        //         this.action$.pipe(
        //           ofType(fromPackagingActions.packagingLoadLots)
        //         )
        // )
        this.loadLotsEffect$ = effects_1.createEffect(function () {
            return _this.action$.pipe(effects_1.ofType(fromPackagingActions.packagingSelectLot), operators_1.exhaustMap(function (action) {
                return _this.lotsService
                    .getLots(action.productId, action.typeLots)
                    .pipe(operators_1.switchMap(function (lots) { return [
                    fromPackagingActions.packagingLoadLots({ lots: lots }),
                    fromPackagingActions.packagingFinishLoad(),
                ]; }));
            }));
        });
        this.loadSuccessEffect = effects_1.createEffect(function () {
            return _this.action$.pipe(effects_1.ofType(fromPackagingActions.packagingLoadSuccess), operators_1.exhaustMap(function (action) {
                _this.toastService.presentToastPackingSuccess();
                return [];
            }), operators_1.catchError(function (errors) {
                _this.toastService.presentToastError();
                return [];
            }));
        }, {
            dispatch: false
        });
    }
    PackagingEffects = __decorate([
        core_1.Injectable()
    ], PackagingEffects);
    return PackagingEffects;
}());
exports.PackagingEffects = PackagingEffects;
