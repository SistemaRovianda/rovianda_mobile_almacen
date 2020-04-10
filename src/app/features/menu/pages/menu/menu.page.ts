import { Component, OnInit } from "@angular/core";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit {
  header: ItemBackInterface = {
    path: "/login",
    title: " ",
    titlePath: "Salir",
  };

  constructor() {}

  ngOnInit() {}
}
