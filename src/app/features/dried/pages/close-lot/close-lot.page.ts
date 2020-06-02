import { Component, OnInit, ViewChild } from "@angular/core";
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
import { LotInterface, lotResponse } from "src/app/shared/Models/lot.interface";
import { CloseLotFormComponent } from "../../components/close-lot-form/close-lot-form.component";
import * as fromStepper from "../../../packaging/store/stepper/stepper-packaging.actions";

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

  @ViewChild(CloseLotFormComponent, { static: true })
  closeLotFormComponent: CloseLotFormComponent;

  lots$: Observable<lotResponse[]> = this.store.select(
    fromCatalogLots.fetchAllLots
  );

  constructor(
    public modalController: ModalController,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit() {
    this.closeLotFormComponent.form.valueChanges.subscribe((_) =>
      this.checkForm()
    );
    this.store.dispatch(
      fromCatalogLotsActions.fetchAllLots({
        typeLot: "DRIEF",
        status: "OPENED",
      })
    );
  }

  checkForm() {
    this.store.dispatch(
      fromStepper.packagingStepperNext({
        num: 1,
        step: !this.closeLotFormComponent.form.invalid,
      })
    );
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
