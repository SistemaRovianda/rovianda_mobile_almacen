import { Component, OnInit } from "@angular/core";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";

@Component({
  selector: "app-report",
  templateUrl: "./report.page.html",
  styleUrls: ["./report.page.scss"],
})
export class ReportPage implements OnInit {
  header: ItemBackInterface = {
    path: "/packaging/exit",
    titlePath: "Regresar",
    title: " ",
  };

  constructor() {}

  ngOnInit() {}

  printReport() {
    console.log("imprimiendo reporte");
  }
}
