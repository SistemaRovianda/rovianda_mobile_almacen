import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import { loginReducer } from "../../landing/store/login/login.reducer";
import { userReducer } from "../../landing/store/user/user.reducer";
export const reducers: ActionReducerMap<AppStateInterface> = {
  login: loginReducer,
  user: userReducer,
};

export const metaReducers: MetaReducer<AppStateInterface>[] = [];
