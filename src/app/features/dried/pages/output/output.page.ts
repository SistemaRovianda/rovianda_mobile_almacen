import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import { Entrance, ExitLot } from "src/app/shared/Models/dried.interface";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";
import { lotResponse } from "src/app/shared/Models/lot.interface";
import { ProductInterface } from "src/app/shared/Models/product.interface";
import { GenerateReportComponent } from "../../dialogs/generate-report/generate-report.component";
import * as fromCatalogLotsActions from "../../store/catalog-lots/catalog-lots.actions";
import * as fromCatalogLots from "../../store/catalog-lots/catalog-lots.selector";
import * as fromCatalogProductsActions from "../../store/catalog-products/catalog-products.actions";
import * as fromCatalogProducts from "../../store/catalog-products/catalog-products.selector";
import { ExitLotFormComponent } from "../../components/exit-lot-form/exit-lot-form.component";
import * as fromStepper from "../../../packaging/store/stepper/stepper-packaging.actions";

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

  lots$: Observable<lotResponse[]> = this.store.select(
    fromCatalogLots.fetchAllLots
  );

  constructor(
    public modalController: ModalController,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit() {
    this.exitLotFormComponent.form.valueChanges.subscribe((_) =>
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
        step: !this.exitLotFormComponent.form.invalid,
      })
    );
  }

  onSubmit(entrance: ExitLot) {
    this.openModal(entrance);
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
