"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.OpenLotePage = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var lot_interface_1 = require("src/app/shared/Models/lot.interface");
var message_dialog_component_1 = require("../../dialogs/message-dialog/message-dialog.component");
var packaging_select_1 = require("../../store/packaging/packaging.select");
var fromStepperActions = require("../../store/stepper/stepper-packaging.actions");
var packaging_actions_1 = require("../../store/packaging/packaging.actions");
var OpenLotePage = /** @class */ (function () {
    function OpenLotePage(fb, store, modalController) {
        this.fb = fb;
        this.store = store;
        this.modalController = modalController;
        this.header = {
            path: "/packaging/menu",
            titlePath: "Regresar",
            title: "Empaque"
        };
        this.lots = [];
        this.products = [];
        this.status = lot_interface_1.STATUS_LOT;
        this.lotForm = this.fb.group({
            serie: ["", [forms_1.Validators.required]],
            product: ["", [forms_1.Validators.required]],
            date: [new Date().toISOString(), [forms_1.Validators.required]],
            status: [this.status.OPENED]
        });
    }
    OpenLotePage.prototype.ngOnInit = function () {
        var _this = this;
        this.lotForm.valueChanges.subscribe(function (_) { return _this.checkValues(); });
        this.store
            .select(packaging_select_1.SELECT_PACKAGING_PRODUCTS)
            .subscribe(function (products) { return (_this.products = products); });
        this.store
            .select(packaging_select_1.SELECT_PACKAGING_LOADING)
            .subscribe(function (tempLoading) { return (_this.loading = tempLoading); });
        this.store.select(packaging_select_1.SELECT_PACKAGING_LOTS).subscribe(function (lots) { return (_this.lots = lots); });
    };
    Object.defineProperty(OpenLotePage.prototype, "serie", {
        get: function () {
            return this.lotForm.get("serie");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenLotePage.prototype, "product", {
        get: function () {
            return this.lotForm.get("product");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenLotePage.prototype, "date", {
        get: function () {
            return this.lotForm.get("date");
        },
        enumerable: false,
        configurable: true
    });
    OpenLotePage.prototype.requestOpenLote = function () {
        this.openModal();
    };
    OpenLotePage.prototype.checkValues = function () {
        this.store.dispatch(fromStepperActions.packagingStepperNext({
            num: 1,
            step: this.lotForm.status !== "INVALID"
        }));
    };
    OpenLotePage.prototype.selectLot = function (evt) {
        var productId = evt.detail.value.productId;
        // console.log("Selecciono el producto: ", evt.detail.value.productId);
        this.store.dispatch(packaging_actions_1.packagingSelectLot({ productId: productId, typeLots: "PACKAGING" }));
        this.product.setValue(productId);
    };
    OpenLotePage.prototype.openModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lot, modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lot = {
                            lotId: this.serie.value.lot,
                            productId: this.product.value,
                            date: new Date(this.date.value).toISOString().split("T")[0],
                            status: "OPENED"
                        };
                        return [4 /*yield*/, this.modalController.create({
                                component: message_dialog_component_1.MessageDialogComponent,
                                cssClass: "modal-size",
                                componentProps: {
                                    lot: lot,
                                    action: "abrir",
                                    type: "open"
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OpenLotePage = __decorate([
        core_1.Component({
            selector: "app-open-lot",
            templateUrl: "./open-lot.page.html",
            styleUrls: ["./open-lot.page.scss"]
        })
    ], OpenLotePage);
    return OpenLotePage;
}());
exports.OpenLotePage = OpenLotePage;
