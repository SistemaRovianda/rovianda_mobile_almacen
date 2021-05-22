import { Component, OnInit } from "@angular/core";
import { ItemBackInterface } from "src/app/shared/models/item-back.interface";

@Component({
  selector: "print-report",
  templateUrl: "./print-report.component.html",
  styleUrls: ["./print-report.component.scss"],
})
export class PrintReportComponent implements OnInit {
  header: ItemBackInterface = {
    path: "/dried/menu",
    titlePath: "Regresar",
  };

  constructor() {}

  ngOnInit() {}
}
