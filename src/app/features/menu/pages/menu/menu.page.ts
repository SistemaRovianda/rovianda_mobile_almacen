import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { signOut } from "src/app/features/landing/store/login/login.action";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";
import { MenuButtonInterface } from "src/app/shared/Models/menu-button.interface";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit {
  header: ItemBackInterface = {
    path: "/login",
    titlePath: "Salir",
    title: " ",
  };

  options: MenuButtonInterface[] = [
    { label: "Empaques", path: "/packaging/menu" },
    { label: "Secos", path: "/dried/menu" },
  ];

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit() {}

  logout() {
    this.store.dispatch(signOut());
  }
}
