import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import * as fromStepperActions from "src/app/features/packaging/store/stepper/stepper-packaging.actions";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";
import { lotResponse, STATUS_LOT } from "src/app/shared/Models/lot.interface";
import { MessageDialogComponent } from "../../dialogs/message-dialog/message-dialog.component";
import {
  SELECT_PACKAGING_LOADING,
  SELECT_PACKAGING_LOTS,
} from "../../store/packaging/packaging.select";

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
      serie: [{ value: "", disabled: this.loading }, [Validators.required]],
      product: ["", [Validators.required]],
      date: [new Date().toISOString(), [Validators.required]],
      status: [this.status.CLOSED],
    });
  }

  ngOnInit() {
    this.lotForm.valueChanges.subscribe((_) => this.checkValues());
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

  selectLot() {
    this.product.setValue("");
  }

  requestCloseLot() {
    this.openModal();
  }

  async openModal() {
    const lot = {
      loteId: this.serie.value.loteId,
      productId: this.product.value,
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
}
