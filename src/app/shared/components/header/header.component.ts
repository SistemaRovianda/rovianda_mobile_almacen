import { Component, OnInit, Input } from "@angular/core";
import { ItemBackInterface } from "../../Models/item-back.interface";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "../../Models/app-state.interface";
import { SELECT_OPTION_SELECTED } from "src/app/features/menu/store/menu.selector";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() itemBack: ItemBackInterface;

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit() {
  }
}
