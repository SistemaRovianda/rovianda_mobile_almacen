import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import * as fromStepperActions from "src/app/features/packaging/store/stepper/stepper-packaging.actions";
import { AppStateInterface } from "src/app/shared/models/app-state.interface";
import { ItemBackInterface } from "src/app/shared/models/item-back.interface";
import { lotResponse, STATUS_LOT } from "src/app/shared/models/lot.interface";
import { MessageDialogComponent } from "../../dialogs/message-dialog/message-dialog.component";
import {
  SELECT_PACKAGING_LOADING,
  SELECT_PACKAGING_LOTS,
  SELECT_PACKAGING_PRODUCTS,
} from "../../store/packaging/packaging.select";
import { ProductInterface } from "src/app/shared/models/product.interface";
import { packagingSelectLot } from "../../store/packaging/packaging.actions";

@Component({
  selector: "app-close-lot",
  templateUrl: "./close-lot.page.html",
  styleUrls: ["./close-lot.page.scss"],
})
export class CloseLotPage implements OnInit {
  header: ItemBackInterface = {
    path: "/packaging/menu",
    titlePath: "Regresar",
    title: "Empaque",
  };

  products: ProductInterface[] = [];

  lots: lotResponse[] = [];

  loading: boolean;

  status = STATUS_LOT;

  lotForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>,
    public modalController: ModalController
  ) {
    this.loading = false;
    this.lotForm = this.fb.group({
      product: [{ value: "", disabled: this.loading }, [Validators.required]],
      serie: [{ value: "", disabled: this.loading }, [Validators.required]],
      date: [new Date().toISOString(), [Validators.required]],
      status: [this.status.CLOSED],
    });
  }

  ngOnInit() {
    this.lotForm.valueChanges.subscribe((_) => this.checkValues());
    this.store
      .select(SELECT_PACKAGING_PRODUCTS)
      .subscribe((products) => (this.products = products));
    this.store
      .select(SELECT_PACKAGING_LOTS)
      .subscribe((tempLots) => (this.lots = tempLots));
    this.store
      .select(SELECT_PACKAGING_LOADING)
      .subscribe((tempLoading) => (this.loading = tempLoading));
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
        status: "OPENED",
      })
    );
  }

  requestCloseLot() {
    this.openModal();
  }

  async openModal() {
    const lot = {
      warehouseId: this.serie.value.warehouseId,
      date: new Date(this.date.value).toISOString().split("T")[0],
      status: "CLOSED",
    };

    const modal = await this.modalController.create({
      component: MessageDialogComponent,
      cssClass: "modal-size",
      componentProps: {
        lot: lot,
        action: "cerrar",
        type: "close",
      },
    });
    return await modal.present();
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

  dateParseStr(date:string){
    let dateSplited = date.split("-");
    return `${dateSplited[2]}/${dateSplited[1]}/${dateSplited[0]}`;
  }
}
