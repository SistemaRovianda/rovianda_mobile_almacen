import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import { loginReducer } from "../../landing/store/login/login.reducer";
import { userReducer } from "../../landing/store/user/user.reducer";
import { menuReducer } from "../../menu/store/menu.reducer";
export const reducers: ActionReducerMap<AppStateInterface> = {
  login: loginReducer,
  user: userReducer,
  menu: menuReducer,
};

export const metaReducers: MetaReducer<AppStateInterface>[] = [];
