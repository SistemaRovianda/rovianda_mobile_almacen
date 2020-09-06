"use strict";
exports.__esModule = true;
exports.packagingClearLots = exports.packagingLoadSuccess = exports.packagingLoadProducts = exports.packagingSelectLot = exports.packagingLoadLots = exports.PackagingFailure = exports.packagingFinishLoad = exports.packagingStartLoad = void 0;
var store_1 = require("@ngrx/store");
var PACKAGING_START_LOAD = "[PACKAGING] Packaging Start Load";
var PACKAGING_FINISH_LOAD = "[PACKAGING] Packaging Finish Load";
var PACKAGING_FAILURE = "[PACKAGING] Packaging Failure";
var PACKAGING_LOAD_LOTS = "[PACKAGING] Packaging Load Lots";
var PACKAGING_SELECT_LOT = "[PACKAGING] Packaging Select Lot";
var PACKAGING_LOAD_PRODUCTS = "[PACKAGING] Packaging Load Products";
var PACKAGING_LOAD_SUCCESS = "[PACKAGING] Load Success";
exports.packagingStartLoad = store_1.createAction(PACKAGING_START_LOAD, store_1.props());
exports.packagingFinishLoad = store_1.createAction(PACKAGING_FINISH_LOAD);
exports.PackagingFailure = store_1.createAction(PACKAGING_FAILURE, store_1.props());
exports.packagingLoadLots = store_1.createAction(PACKAGING_LOAD_LOTS, store_1.props());
exports.packagingSelectLot = store_1.createAction(PACKAGING_SELECT_LOT, store_1.props());
exports.packagingLoadProducts = store_1.createAction(PACKAGING_LOAD_PRODUCTS, store_1.props());
exports.packagingLoadSuccess = store_1.createAction(PACKAGING_LOAD_SUCCESS);
exports.packagingClearLots = store_1.createAction('[PACKAGING] Clear lots');