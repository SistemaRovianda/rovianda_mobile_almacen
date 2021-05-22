import { createAction, props } from "@ngrx/store";
import { MenuButtonInterface } from "src/app/shared/models/menu-button.interface";

const START_LOAD_MENU_OPTION = "[MENU] Start Load Menu Option";

const LOAD_MENU_OPTION = "[MENU] Load Menu Option";

const FINISH_LOAD_MENU_OPTION = "[MENU] Finish Load Menu Option";


export const StartLoadMenuOption = createAction(
  START_LOAD_MENU_OPTION,
  props<MenuButtonInterface>()
);

export const finishLoadMenuOption = createAction(FINISH_LOAD_MENU_OPTION);

export const loadMenuOption = createAction(
  LOAD_MENU_OPTION,
  props<{ itemSelected: MenuButtonInterface }>()
);