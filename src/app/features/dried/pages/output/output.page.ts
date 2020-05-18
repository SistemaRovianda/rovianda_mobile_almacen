import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import { Entrance, ExitLot } from "src/app/shared/Models/dried.interface";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";
import { ProductInterface } from "src/app/shared/Models/product.interface";
import * as fromCatalogProductsActions from "../../store/catalog-products/catalog-products.actions";
import * as fromCatalogProducts from "../../store/catalog-products/catalog-products.selector";
import * as fromCatalogLotsActions from "../../store/catalog-lots/catalog-lots.actions";
import * as fromCatalogLots from "../../store/catalog-lots/catalog-lots.selector";
import { LotInterface } from "src/app/shared/Models/lot.interface";
import { MessageDialogComponent } from "../../dialogs/message-dialog/message-dialog.component";
import { GenerateReportComponent } from "../../dialogs/generate-report/generate-report.component";

@Component({
  selector: "app-exit-lot",
  templateUrl: "./output.page.html",
  styleUrls: ["./output.page.scss"],
})
export class OutputPageComponent implements OnInit {
  header: ItemBackInterface = {
    path: "/dried/menu",
    titlePath: "Regresar",
  };

  products$: Observable<ProductInterface[]> = this.store.select(
    fromCatalogProducts.fetchAllProducts
  );

  lots$: Observable<LotInterface[]> = this.store.select(
    fromCatalogLots.fetchAllLots
  );

  constructor(
    public modalController: ModalController,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit() {
    this.store.dispatch(
      fromCatalogLotsActions.fetchAllLots({
        typeLot: "DRIED",
        status: "OPENED",
      })
    );
    this.store.dispatch(fromCatalogProductsActions.fetchAllProducts());
  }

  onSubmit(entrance: ExitLot) {
    this.openModal(entrance);
  }

  async openModal(exitLot: Entrance) {
    const modal = await this.modalController.create({
      component: GenerateReportComponent,
      cssClass: "modal-size",
      componentProps: {
        exitLot: exitLot,
      },
    });
    return await modal.present();
  }
}
