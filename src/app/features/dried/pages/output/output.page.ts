import { Component, OnInit } from "@angular/core";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";
import { Entrance } from "src/app/shared/Models/dried.interface";
import { MessageDialogComponent } from "../../dialogs/message-dialog/message-dialog.component";
import { ModalController } from "@ionic/angular";

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

  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  onSubmit(entrance: Entrance) {
    // this.openModal(entrance);
  }

  // async openModal(entrance: Entrance) {
  //   const modal = await this.modalController.create({
  //     component: MessageDialogComponent,
  //     cssClass: "modal-size",
  //     componentProps: {
  //       entrance: entrance,
  //       action: "abrir",
  //     },
  //   });
  //   return await modal.present();
  // }
}
