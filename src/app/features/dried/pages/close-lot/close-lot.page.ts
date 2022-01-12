import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppStateInterface } from "src/app/shared/models/app-state.interface";
import { Entrance } from "src/app/shared/models/dried.interface";
import { ItemBackInterface } from "src/app/shared/models/item-back.interface";
import * as fromStepper from "../../../packaging/store/stepper/stepper-packaging.actions";
import { CloseLotFormComponent } from "../../components/close-lot-form/close-lot-form.component";
import { MessageDialogComponent } from "../../dialogs/message-dialog/message-dialog.component";

import * as fromCatalogProductsActions from "../..//store/catalog-products/catalog-products.actions";
import * as fromCatalogoProducts from "../../store/catalog-products/catalog-products.selector";
import { ProductInterface } from 'src/app/shared/models/product.interface';
import { SELECT_CLOSE_DRIEF_LOADING } from "../../store/close-lot/close-lot.selectors";

@Component({
  selector: "close-lot",
  templateUrl: "./close-lot.page.html",
  styleUrls: ["./close-lot.page.scss"],
})
export class CloseLotPageComponent implements OnInit {
  header: ItemBackInterface = {
    path: "/dried/menu",
    titlePath: "Regresar",
    title: "Secos",
  };

  @ViewChild(CloseLotFormComponent, { static: true })
  closeLotFormComponent: CloseLotFormComponent;

  products$: Observable<ProductInterface[]> = this.store.select(
    fromCatalogoProducts.fetchAllProducts
  );

  constructor(
    public modalController: ModalController,
    private store: Store<AppStateInterface>
  ) { }
    isLoading:boolean=false;
  ngOnInit() {
    this.closeLotFormComponent.form.valueChanges.subscribe((_) =>
      this.checkForm()
    );
    this.store.dispatch(
      fromCatalogProductsActions.fetchAllProducts({
        typeProduct: "DRIEF",
        status: "OPENED",
      })
    );
    this.store.select(SELECT_CLOSE_DRIEF_LOADING).subscribe((isLoading)=>{
      this.isLoading=isLoading;
    })
  }

  checkForm() {
    this.store.dispatch(
      fromStepper.packagingStepperNext({
        num: 1,
        step: !this.closeLotFormComponent.form.invalid,
      })
    );
  }

  onSubmit(event) {
    this.openModal(event.data, event.warehouseDriefId);
  }

  async openModal(entrance: Entrance, warehouseDriefId) {
    const modal = await this.modalController.create({
      component: MessageDialogComponent,
      cssClass: "modal-size",
      componentProps: {
        entrance: entrance,
        warehouseDriefId: warehouseDriefId,
        action: "cerrar",
        type: "close",
      },
    });
    return await modal.present();
  }
}
