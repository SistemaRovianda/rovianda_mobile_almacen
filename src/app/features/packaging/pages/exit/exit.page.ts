import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import * as fromLotSelector from "src/app/features/packaging/store/packaging/packaging.select";
import * as exitSelectors from "src/app/features/packaging/store/exit/exit.selector";
import * as fromStepperActions from "src/app/features/packaging/store/stepper/stepper-packaging.actions";
import { AppStateInterface } from "src/app/shared/models/app-state.interface";
import { ItemBackInterface } from "src/app/shared/models/item-back.interface";
import { ProductInterface } from "src/app/shared/models/product.interface";
import { lotResponse } from "src/app/shared/models/lot.interface";
import { noWhiteSpace } from "src/app/shared/validators/whitespace.validator";
import { GenerateReportComponent } from "../../dialogs/generate-report/generate-report.component";
import { Observable } from "rxjs";
import { packagingSelectLot } from "../../store/packaging/packaging.actions";
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

  lots$: Observable<lotResponse[]>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>,
    public modalController: ModalController
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
      .select(fromLotSelector.SELECT_PACKAGING_PRODUCTS)
      .subscribe((products) => (this.products = products));

    this.store
      .select(exitSelectors.SELECT_PACKAGING_EXIT_LOADING)
      .subscribe((tempLoading) => (this.loading = tempLoading));

    this.lots$ = this.store.select(fromLotSelector.SELECT_PACKAGING_LOTS);
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
    this.openModal();
  }

  selectProduct(evt) {
    let productId = evt.detail.value.productId;
    this.store.dispatch(
      packagingSelectLot({
        productId: productId,
        typeLots: "PACKING",
        status: "OPENED",
      })
    );
  }

  async openModal() {
    const request = {
      loteId: this.loteId.value, // Se envia warehouseId
      productId: this.product.value.productId,
      quantity: this.quantity.value,
      name: this.name.value,
      date: new Date(this.date.value).toISOString().split("T")[0],
    };

    const modal = await this.modalController.create({
      component: GenerateReportComponent,
      cssClass: "modal-size",
      componentProps: {
        request: request,
      },
    });
    return await modal.present();
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

  dateParseStr(date:string){
    let dateSplited = date.split("-");
    return `${dateSplited[2]}/${dateSplited[1]}/${dateSplited[0]}`;
  }
}
