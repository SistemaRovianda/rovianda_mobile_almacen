import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";
import { MenuButtonInterface } from "src/app/shared/Models/menu-button.interface";

@Component({
  selector: "app-packaging-layout",
  templateUrl: "./packaging-menu.page.html",
  styleUrls: ["./packaging-menu.page.scss"],
})
export class PackagingMenuPage implements OnInit {
  header: ItemBackInterface = {
    path: "/menu",
    titlePath: "Regresar",
    title: "Empaque",
  };

  options: MenuButtonInterface[] = [
    { label: "Abrir lote", path: "/packaging/open-lot" }, // agregar path hacia el menu que se requiera
    { label: "Cerrar lote", path: "/packaging/close-lot" },
    { label: "Salida", path: "/packaging/exit-lot" },
  ];

  section: string;
  constructor(private router: Router) {}

  ngOnInit() {}

  nextSection() {
    this.router.navigate(["/" + this.options[this.section].path]);
    this.section = undefined;
  }
}
