import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Entrance } from "src/app/shared/Models/dried.interface";

@Component({
  selector: "app-message-dialog",
  templateUrl: "./message-dialog.component.html",
  styleUrls: ["./message-dialog.component.scss"],
})
export class MessageDialogComponent implements OnInit {
  entrance: Entrance;

  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  cancel() {
    this.modalController.dismiss();
  }
}
