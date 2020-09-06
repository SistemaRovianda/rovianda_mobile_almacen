"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.products = [
            {
                loteId: 4525,
                description: "producto 1 lote 1"
            },
            {
                loteId: 4525,
                description: "producto 2 lote 1"
            },
            {
                loteId: 4526,
                description: "producto 1 lote 2"
            },
            {
                loteId: 4527,
                description: "producto 1 lote 3"
            },
            {
                loteId: 4528,
                description: "producto 1 lote 4"
            },
            {
                loteId: 4528,
                description: "producto 2 lote 4"
            },
        ];
        this.url = environment_1.environment.basePath + "/product/catalog";
    }
    // getProducts(loteId: number): Observable<any> {
    //   return new Observable((observer) => {
    //     observer.next(
    //       this.products.filter((product) => {
    //         return product.loteId === loteId;
    //       })
    //     );
    //     observer.complete();
    //   });
    // }
    ProductService.prototype.getAllProductsPacking = function () {
        return this.http.get(this.url + "/PACKING");
    };
    ProductService.prototype.getAllProductsDried = function () {
        return this.http.get(this.url + "/DRIEF");
    };
    ProductService.prototype.getProducts = function (type, status) {
        return this.http.get(this.url + "?type=" + type + "&status=" + status);
    };
    ProductService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
