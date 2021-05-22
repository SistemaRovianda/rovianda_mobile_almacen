import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ItemBackInterface } from "../../models/item-back.interface";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "../../models/app-state.interface";
import { SELECT_OPTION_SELECTED } from "src/app/features/menu/store/menu/menu.selector";
import { packagingClearLots } from 'src/app/features/packaging/store/packaging/packaging.actions';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() itemBack: ItemBackInterface;

  @Output('onBack')
  back = new EventEmitter<string>();

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit() {}

  onBack() {
    this.back.emit("back");
    this.store.dispatch(packagingClearLots());
  }
}
