import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ItemBackInterface } from "src/app/shared/models/item-back.interface";
import { MenuButtonInterface } from "src/app/shared/models/menu-button.interface";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  header: ItemBackInterface = {
    path: "/menu",
    titlePath: "Regresar",
    title: "Secos",
  };

  options: MenuButtonInterface[] = [
    { label: "Abrir lote", path: "/dried/open-lot" }, // agregar path hacia el menu que se requiera
    { label: "Cerrar lote", path: "/dried/close-lot" },
    { label: "Salida", path: "/dried/exit-lot" },
  ];

  constructor(private router: Router) {}

  section: string;

  ngOnInit() {}

  nextSection() {
    this.router.navigate(["/" + this.options[this.section].path]);
    this.section = undefined;
  }
}
