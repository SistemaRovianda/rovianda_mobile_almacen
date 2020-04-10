import { Component, OnInit, Input } from "@angular/core";
import { ItemBackInterface } from "../../Models/item-back.interface";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() itemBack: ItemBackInterface;

  constructor() {}

  ngOnInit() {}
}
