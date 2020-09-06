"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.LotsService = void 0;
var core_1 = require("@angular/core");
var tokens_1 = require("src/app/providers/tokens");
var LotsService = /** @class */ (function () {
    function LotsService(http, endpoint) {
        this.http = http;
        this.endpoint = endpoint;
        this.url = "" + endpoint;
    }
    // getLots(type: string, status: string): Observable<any> {
    //   const params = new HttpParams({
    //     fromObject: {
    //       type: type,
    //       status: status,
    //     },
    //   });
    //   return this.http.get<any>(`${this.url}/lots`, { params });
    // }
    LotsService.prototype.getLots = function (productId, type) {
        return this.http.get(this.url + "/product/lots/" + productId + "?type=" + type);
    };
    LotsService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        }),
        __param(1, core_1.Inject(tokens_1.API_ENDPOINT_PROVIDER))
    ], LotsService);
    return LotsService;
}());
exports.LotsService = LotsService;
