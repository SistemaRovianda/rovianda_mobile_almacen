import { Component, OnInit } from "@angular/core";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";
import { FormBuilder, Validators } from "@angular/forms";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import { Store } from "@ngrx/store";
import { AlertController } from "@ionic/angular";
import * as fromStepperActions from "src/app/features/packaging/store/stepper/stepper-packaging.actions";
import * as fromExitActions from "src/app/features/packaging/store/exit/exit.actions";
import * as fromExitSelector from "src/app/features/packaging/store/exit/exit.selector";
import { ProductInterface } from "src/app/shared/Models/product.interface";
import { Router } from "@angular/router";
import { noWhiteSpace } from "src/app/shared/Validators/whitespace.validator";
@Component({
  selector: "app-exit",
  templateUrl: "./exit.page.html",
  styleUrls: ["./exit.page.scss"],
})
export class ExitPage implements OnInit {
  header: ItemBackInterface = {
    path: "/packaging/menu",
    titlePath: "Regresar",
    title: "Empaque",
  };

  loading: boolean;

  products: ProductInterface[];

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  exitForm = this.fb.group({
    date: [new Date().toISOString(), [Validators.required]],
    loteId: ["", [Validators.required]],
    product: ["", [Validators.required]],
    quantity: ["", [Validators.required]],
    name: ["", [Validators.required, noWhiteSpace]],
  });

  ngOnInit() {
    this.exitForm.valueChanges.subscribe((_) => this.checkValues());
    this.store
      .select(fromExitSelector.SELECT_PACKAGING_EXIT_LOADING)
      .subscribe((tempLoading) => (this.loading = tempLoading));

    this.store
      .select(fromExitSelector.SELECT_PACKAGING_EXIT_PRODUCTS)
      .subscribe((tempProducts) => (this.products = tempProducts));
  }

  checkValues() {
    this.store.dispatch(
      fromStepperActions.packagingStepperNext({
        num: 1,
        step: this.exitForm.status !== "INVALID",
      })
    );
  }

  requestExit() {
    this.createAlert();
  }

  async createAlert() {
    const alert = await this.alertCtrl.create({
      message: "Una vez que genere el reporte este no podrá ser modificado",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
        },
        {
          text: "Confirmar",
          handler: () => {
            this.store.dispatch(
              fromExitActions.exitLoadRequest({
                request: {
                  loteId: this.loteId.value,
                  productId: this.product.value,
                  quantity: this.quantity.value,
                  name: this.name.value,
                  date: new Date(this.date.value).toISOString().split("T")[0],
                },
              })
            );
            // this.router.navigate(["/packaging/print-report"]);
          },
        },
      ],
    });
    await alert.present();
  }
  get date() {
    return this.exitForm.get("date");
  }

  get loteId() {
    return this.exitForm.get("loteId");
  }

  get product() {
    return this.exitForm.get("product");
  }

  get quantity() {
    return this.exitForm.get("quantity");
  }

  get name() {
    return this.exitForm.get("name");
  }
}
