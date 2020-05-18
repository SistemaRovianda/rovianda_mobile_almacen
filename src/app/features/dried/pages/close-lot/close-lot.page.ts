import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import { Entrance } from "src/app/shared/Models/dried.interface";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";
import { ProductInterface } from "src/app/shared/Models/product.interface";
import { MessageDialogComponent } from "../../dialogs/message-dialog/message-dialog.component";
import * as fromCatalogProductsActions from "../../store/catalog-products/catalog-products.actions";
import * as fromCatalogProducts from "../../store/catalog-products/catalog-products.selector";
import * as fromCatalogLotsActions from "../../store/catalog-lots/catalog-lots.actions";
import * as fromCatalogLots from "../../store/catalog-lots/catalog-lots.selector";
import { LotInterface } from "src/app/shared/Models/lot.interface";

@Component({
  selector: "close-lot",
  templateUrl: "./close-lot.page.html",
  styleUrls: ["./close-lot.page.scss"],
})
export class CloseLotPageComponent implements OnInit {
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

  onSubmit(entrance: Entrance) {
    this.openModal(entrance);
  }

  async openModal(entrance: Entrance) {
    const modal = await this.modalController.create({
      component: MessageDialogComponent,
      cssClass: "modal-size",
      componentProps: {
        entrance: entrance,
        action: "cerrar",
        type: "close",
      },
    });
    return await modal.present();
  }
}
