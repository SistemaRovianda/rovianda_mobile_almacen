import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import { Entrance } from "src/app/shared/Models/dried.interface";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";
import { lotResponse } from "src/app/shared/Models/lot.interface";
import { OpenLotFormComponent } from "../../components/open-lot-form/open-lot-form.component";
import { MessageDialogComponent } from "../../dialogs/message-dialog/message-dialog.component";
import * as fromCatalogLotsActions from "../../store/catalog-lots/catalog-lots.actions";
import * as fromCatalogLots from "../../store/catalog-lots/catalog-lots.selector";
import * as fromCatalogProductsActions from "../../store/catalog-products/catalog-products.actions";
import * as fromStepper from "../../../packaging/store/stepper/stepper-packaging.actions";

@Component({
  selector: "open-lot",
  templateUrl: "./open-lot.page.html",
  styleUrls: ["./open-lot.page.scss"],
})
export class OpenLotPageComponent implements OnInit {
  header: ItemBackInterface = {
    path: "/dried/menu",
    titlePath: "Regresar",
    title: "Secos",
  };

  @ViewChild(OpenLotFormComponent, { static: true })
  openLotFormComponent: OpenLotFormComponent;

  products$: Observable<any>;

  lots$: Observable<lotResponse[]> = this.store.select(
    fromCatalogLots.fetchAllLots
  );

  constructor(
    public modalController: ModalController,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit() {
    this.openLotFormComponent.form.valueChanges.subscribe((_) =>
      this.checkForm()
    );
    this.store.dispatch(
      fromCatalogLotsActions.fetchAllLots({
        typeLot: "DRIEF",
        status: "PENDING",
      })
    );
  }

  checkForm() {
    this.store.dispatch(
      fromStepper.packagingStepperNext({
        num: 1,
        step: !this.openLotFormComponent.form.invalid,
      })
    );
  }

  onSubmit(event) {
    console.log("event: ", event);
    this.openModal(event.data, event.warehouseDriefId);
  }

  async openModal(entrance: Entrance, warehouseDriefId: string) {
    const modal = await this.modalController.create({
      component: MessageDialogComponent,
      cssClass: "modal-size",
      componentProps: {
        entrance: entrance,
        warehouseDriefId: warehouseDriefId,
        action: "abrir",
        type: "open",
      },
    });
    return await modal.present();
  }
}
