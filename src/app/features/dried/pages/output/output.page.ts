import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppStateInterface } from "src/app/shared/models/app-state.interface";
import { Entrance, ExitLot } from "src/app/shared/models/dried.interface";
import { ItemBackInterface } from "src/app/shared/models/item-back.interface";
import * as fromStepper from "../../../packaging/store/stepper/stepper-packaging.actions";
import { ExitLotFormComponent } from "../../components/exit-lot-form/exit-lot-form.component";
import { GenerateReportComponent } from "../../dialogs/generate-report/generate-report.component";

import * as fromCatalogProductsActions from "../..//store/catalog-products/catalog-products.actions";
import * as fromCatalogoProducts from "../../store/catalog-products/catalog-products.selector";
import { ProductInterface } from 'src/app/shared/models/product.interface';
import { SELECT_DRIEF_EXIT_LOADING } from "../../store/output/output.selectors";

@Component({
  selector: "app-exit-lot",
  templateUrl: "./output.page.html",
  styleUrls: ["./output.page.scss"],
})
export class OutputPageComponent implements OnInit {
  header: ItemBackInterface = {
    path: "/dried/menu",
    titlePath: "Regresar",
  };

  @ViewChild(ExitLotFormComponent, { static: true })
  exitLotFormComponent: ExitLotFormComponent;

  products$: Observable<ProductInterface[]> = this.store.select(
    fromCatalogoProducts.fetchAllProducts
  );

  constructor(
    public modalController: ModalController,
    private store: Store<AppStateInterface>
  ) { }
    isLoading:boolean=false;
  ngOnInit() {
    this.exitLotFormComponent.form.valueChanges.subscribe((_) =>
      this.checkForm()
    );
    this.store.dispatch(
      fromCatalogProductsActions.fetchAllProducts({
        typeProduct: "DRIEF",
        status: "OPENED",
      })
    );
    this.store.select(SELECT_DRIEF_EXIT_LOADING).subscribe((isLoading)=>{
      this.isLoading=isLoading;
    })
  }
  checkForm() {
    this.store.dispatch(
      fromStepper.packagingStepperNext({
        num: 1,
        step: !this.exitLotFormComponent.form.invalid,
      })
    );
  }

  onSubmit(entrance: ExitLot) {
    if(!this.isLoading){
    this.openModal(entrance);
    }
  }

  async openModal(exitLot: Entrance) {
    const modal = await this.modalController.create({
      component: GenerateReportComponent,
      cssClass: "modal-size",
      componentProps: {
        exitLot: exitLot,
      },
    });
    return await modal.present();
  }
}
