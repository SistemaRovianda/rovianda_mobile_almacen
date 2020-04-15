import { Component, OnInit } from "@angular/core";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";
import { MenuButtonInterface } from "src/app/shared/Models/menu-button.interface";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import { loadMenuOption } from "../../store/menu.action";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit {
  header: ItemBackInterface = {
    path: "/login",
    titlePath: "Salir",
  };

  options: MenuButtonInterface[] = [
    { label: "Empaques", path: "/login" }, // agregar path hacia el menu que se requiera
    { label: "Secos", path: "/dried-form" },
  ];

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit() {
    this.store.dispatch(
      loadMenuOption({ itemSelected: { label: " ", path: "" } })
    );
  }
}
