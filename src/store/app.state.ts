import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "src/app/interfaces/appState.interface";
import { UIReducer } from './reducers/ui.reducer';

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    ui: UIReducer
};