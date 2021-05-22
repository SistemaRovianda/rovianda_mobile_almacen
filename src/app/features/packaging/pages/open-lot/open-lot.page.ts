import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/app-state.interface";
import { ItemBackInterface } from "src/app/shared/models/item-back.interface";
import { lotResponse, STATUS_LOT } from "src/app/shared/models/lot.interface";
import { MessageDialogComponent } from "../../dialogs/message-dialog/message-dialog.component";
import {
  SELECT_PACKAGING_LOADING,
  SELECT_PACKAGING_LOTS,
  SELECT_PACKAGING_PRODUCTS,
} from "../../store/packaging/packaging.select";
import * as fromStepperActions from "../../store/stepper/stepper-packaging.actions";
import { ProductInterface } from "src/app/shared/models/product.interface";
import { packagingSelectLot } from "../../store/packaging/packaging.actions";

@Component({
  selector: "app-open-lot",
  templateUrl: "./open-lot.page.html",
  styleUrls: ["./open-lot.page.scss"],
})
export class OpenLotePage implements OnInit {
  header: ItemBackInterface = {
    path: "/packaging/menu",
    titlePath: "Regresar",
    title: "Empaque",
  };

  lots: lotResponse[] = [];

  products: ProductInterface[] = [];

  loading: boolean;

  status = STATUS_LOT;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>,
    public modalController: ModalController
  ) {}

  lotForm = this.fb.group({
    product: ["", [Validators.required]],
    serie: ["", [Validators.required]],
    date: [new Date().toISOString(), [Validators.required]],
    status: [this.status.OPENED],
  });

  ngOnInit() {
    this.lotForm.valueChanges.subscribe((_) => this.checkValues());
    this.store
      .select(SELECT_PACKAGING_PRODUCTS)
      .subscribe((products) => (this.products = products));
    this.store
      .select(SELECT_PACKAGING_LOADING)
      .subscribe((tempLoading) => (this.loading = tempLoading));

    this.store
      .select(SELECT_PACKAGING_LOTS)
      .subscribe((lots) => (this.lots = lots));
  }

  get serie() {
    return this.lotForm.get("serie");
  }

  get product() {
    return this.lotForm.get("product");
  }

  get date() {
    return this.lotForm.get("date");
  }

  requestOpenLote() {
    this.openModal();
  }

  checkValues() {
    this.store.dispatch(
      fromStepperActions.packagingStepperNext({
        num: 1,
        step: this.lotForm.status !== "INVALID",
      })
    );
  }

  selectLot(evt) {
    let productId: string = evt.detail.value.productId;
    this.store.dispatch(
      packagingSelectLot({
        productId: productId,
        typeLots: "PACKING",
        status: "PENDING",
      })
    );
  }

  async openModal() {
    const lot = {
      warehouseId: this.serie.value.warehouseId,
      date: new Date(this.date.value).toISOString().split("T")[0],
      status: "OPENED",
    };

    const modal = await this.modalController.create({
      component: MessageDialogComponent,
      cssClass: "modal-size",
      componentProps: {
        lot: lot,
        action: "abrir",
        type: "open",
      },
    });
    return await modal.present();
  }
}
