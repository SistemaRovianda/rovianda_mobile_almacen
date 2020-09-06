"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.PackagingReducer = void 0;
var store_1 = require("@ngrx/store");
var fromPackagingActions = require("./packaging.actions");
var fromOpenLotActions = require("../open-lot/open-lot.actions");
var fromCloseLotActions = require("../close-lot/close-lot.actions");
var STATE_INITIAL_PACKAGING = {
    lots: [],
    products: [],
    loading: false,
    errors: null
};
exports.PackagingReducer = store_1.createReducer(STATE_INITIAL_PACKAGING, store_1.on(fromPackagingActions.packagingFinishLoad, function (state) { return (__assign(__assign({}, state), { loading: false })); }), store_1.on(fromPackagingActions.PackagingFailure, function (state, _a) {
    var errors = _a.errors;
    return (__assign(__assign({}, state), { errors: errors }));
}), store_1.on(fromPackagingActions.packagingLoadLots, function (state, _a) {
    var lots = _a.lots;
    return (__assign(__assign({}, state), { lots: lots }));
}), store_1.on(fromPackagingActions.packagingLoadProducts, function (state, _a) {
    var products = _a.products;
    return (__assign(__assign({}, state), { products: products }));
}), store_1.on(fromPackagingActions.packagingSelectLot, function (state) { return (__assign(__assign({}, state), { loading: true })); }), store_1.on(fromOpenLotActions.openLotStarLoad, function (state) { return (__assign(__assign({}, state), { loading: true })); }), store_1.on(fromCloseLotActions.closeLotStartLoad, function (state) { return (__assign(__assign({}, state), { loading: true })); }), store_1.on(fromPackagingActions.packagingClearLots, function (state) { return (__assign(__assign({}, state), { lots: [] })); }));
