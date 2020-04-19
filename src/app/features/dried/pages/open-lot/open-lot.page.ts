import { Component, OnInit, ViewChild } from "@angular/core";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";
import { Entrance } from "src/app/shared/Models/dried.interface";
import { OpenLotFormComponent } from "../../components/open-lot-form/open-lot-form.component";
import { ModalController } from "@ionic/angular";
import { MessageDialogComponent } from "../../dialogs/message-dialog/message-dialog.component";

@Component({
  selector: "open-lot",
  templateUrl: "./open-lot.page.html",
  styleUrls: ["./open-lot.page.scss"],
})
export class OpenLotPageComponent implements OnInit {
  header: ItemBackInterface = {
    path: "/dried/menu",
    titlePath: "Regresar",
  };

  @ViewChild(OpenLotFormComponent, { static: true })
  openLotFormComponent: OpenLotFormComponent;

  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  onSubmit(entrance: Entrance) {
    this.openModal(entrance);
  }

  async openModal(entrance: Entrance) {
    const modal = await this.modalController.create({
      component: MessageDialogComponent,
      cssClass: "modal-size",
      componentProps: {
        entrance: entrance,
        action: "abrir",
      },
    });
    return await modal.present();
  }
}
