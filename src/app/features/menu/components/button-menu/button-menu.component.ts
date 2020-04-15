import { Component, OnInit, Input } from "@angular/core";
import { MenuButtonInterface } from "src/app/shared/Models/menu-button.interface";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import { StartLoadMenuOption } from "../../store/menu/menu.action";
import { SELECT_IS_LOADING_MENU } from "../../store/menu/menu.selector";

@Component({
  selector: "app-button-menu",
  templateUrl: "./button-menu.component.html",
  styleUrls: ["./button-menu.component.scss"],
})
export class ButtonMenuComponent implements OnInit {
  @Input() labelButton: MenuButtonInterface;

  constructor(
    private router: Router,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit() {}

  nagivateTo() {
    this.store.dispatch(StartLoadMenuOption(this.labelButton));
    this.router.navigate([this.labelButton.path]);
  }
}
