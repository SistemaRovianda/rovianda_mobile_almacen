import { Component, OnInit } from "@angular/core";
import { MenuButtonInterface } from "src/app/shared/Models/menu-button.interface";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  header: ItemBackInterface = {
    path: "/menu",
    titlePath: "Regresar",
  };

  options: MenuButtonInterface[] = [
    { label: "Abrir lote", path: "/dried/open-lot" }, // agregar path hacia el menu que se requiera
    { label: "Cerrar lote", path: "/dried/close-lot" },
    { label: "Salida", path: "/dried/output" },
  ];

  constructor() {}

  ngOnInit() {}
}
