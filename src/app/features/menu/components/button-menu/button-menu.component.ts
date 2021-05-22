import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/app-state.interface";
import { MenuButtonInterface } from "src/app/shared/models/menu-button.interface";
import { StartLoadMenuOption } from "../../store/menu/menu.action";

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
