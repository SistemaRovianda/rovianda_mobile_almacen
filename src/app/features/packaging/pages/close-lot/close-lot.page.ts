import { Component, OnInit } from "@angular/core";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";
import {
  LotInterface,
  STATUS_LOT,
  lotResponse,
} from "src/app/shared/Models/lot.interface";
import { ProductInterface } from "src/app/shared/Models/product.interface";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import { AlertController } from "@ionic/angular";
import * as fromStepperActions from "src/app/features/packaging/store/stepper/stepper-packaging.actions";
import {
  SELECT_PACKAGING_LOTS,
  SELECT_PACKAGING_PRODUCTS,
  SELECT_PACKAGING_LOADING,
} from "../../store/packaging/packaging.select";
import * as fromPackagingActions from "src/app/features/packaging/store/packaging/packaging.actions";
import { closeLotStartLoad } from "../../store/close-lot/close-lot.actions";

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

  lots: lotResponse[];

  loading: boolean;

  status = STATUS_LOT;

  lotForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>,
    private alertCtrl: AlertController
  ) {
    this.loading = false;
    this.lotForm = this.fb.group({
      serie: [{ value: "", disabled: this.loading }, [Validators.required]],
      product: ["", [Validators.required]],
      date: [new Date().toISOString(), [Validators.required]],
      status: [this.status.CLOSE],
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
    this.createAlert();
  }

  async createAlert() {
    const alert = await this.alertCtrl.create({
      header: "Cerrar Lote",
      message: "Presione 'Confirmar' para cerrar el lote",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
        },
        {
          text: "Confirmar",
          handler: () => {
            this.store.dispatch(
              closeLotStartLoad({
                lot: {
                  loteId: this.serie.value.loteId,
                  productId: this.product.value,
                  date: new Date(this.date.value).toISOString().split("T")[0],
                  status: "CLOSED",
                },
              })
            );
          },
        },
      ],
    });
    await alert.present();
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
