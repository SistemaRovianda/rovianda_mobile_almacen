import { Component, OnInit } from "@angular/core";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";
import { Entrance } from "src/app/shared/Models/dried.interface";
import { ModalController } from "@ionic/angular";
import { MessageDialogComponent } from "../../dialogs/message-dialog/message-dialog.component";

@Component({
  selector: "close-lot",
  templateUrl: "./close-lot.page.html",
  styleUrls: ["./close-lot.page.scss"],
})
export class CloseLotPageComponent implements OnInit {
  header: ItemBackInterface = {
    path: "/dried/menu",
    titlePath: "Regresar",
  };

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
        action: "cerrar",
      },
    });
    return await modal.present();
  }
}
