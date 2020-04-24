import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";
import { MenuButtonInterface } from "src/app/shared/Models/menu-button.interface";

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
    { label: "Salida", path: "/dried/exit-lot" },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  print() {}
}
