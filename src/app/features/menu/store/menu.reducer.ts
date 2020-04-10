import { MenuPageInterface } from "src/app/shared/Models/menu-page.interface";
import { createReducer, on } from "@ngrx/store";
import * as fromMenuActions from "./menu.action";

const STATE_INITIAL_MENU: MenuPageInterface = {
  itemSelected: { label: " ", path: "" },
  loading: false,
};

export const menuReducer = createReducer<MenuPageInterface>(
  STATE_INITIAL_MENU,
  on(fromMenuActions.StartLoadMenuOption, (state) => ({
    ...state,
    loading: true,
  })),
  on(fromMenuActions.loadMenuOption, (state, { itemSelected }) => ({
    ...state,
    itemSelected,
  })),
  on(fromMenuActions.finishLoadMenuOption, (state) => ({
    ...state,
    loading: false,
  }))
);
