import { Component, OnInit } from "@angular/core";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import * as fromStepperActions from "../../store/stepper/stepper-packaging.actions";
import * as fromPackagingActios from "../../store/packaging/packaging.actions";
import {
  LotInterface,
  STATUS_LOT,
  lotResponse,
} from "src/app/shared/Models/lot.interface";
import {
  SELECT_PACKAGING_LOTS,
  SELECT_PACKAGING_PRODUCTS,
  SELECT_PACKAGING_LOADING,
} from "../../store/packaging/packaging.select";
import { ProductInterface } from "src/app/shared/Models/product.interface";
import { AlertController } from "@ionic/angular";
import { openLotStarLoad } from "../../store/open-lot/open-lot.actions";

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

  lots: lotResponse[];

  loading: boolean;

  status = STATUS_LOT;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>,
    private alert: AlertController
  ) {}

  lotForm = this.fb.group({
    serie: ["", [Validators.required]],
    product: ["", [Validators.required]],
    date: [new Date().toISOString(), [Validators.required]],
    status: [this.status.OPENED],
  });

  ngOnInit() {
    this.lotForm.valueChanges.subscribe((_) => this.checkValues());
    this.store
      .select(SELECT_PACKAGING_LOTS)
      .subscribe((tempLots) => (this.lots = tempLots));
    this.store
      .select(SELECT_PACKAGING_LOADING)
      .subscribe((tempLoading) => (this.loading = tempLoading));
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
    this.createAlert();
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

  async createAlert() {
    const alert = await this.alert.create({
      header: "Abrir Lote",
      message: "Presione 'Confirmar' para abrir el lote",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
        },
        {
          text: "Confirmar",
          handler: () => {
            this.store.dispatch(
              openLotStarLoad({
                lot: {
                  loteId: this.serie.value.loteId,
                  productId: this.product.value,
                  date: new Date(this.date.value).toISOString().split("T")[0],
                  status: "OPENED",
                },
              })
            );
          },
        },
      ],
    });
    await alert.present();
  }
}
