import { createReducer, on } from "@ngrx/store";
import { openMenu, closeMenu } from "../actions/ui.actions";
import { UIState } from '../../app/interfaces/ui.interface';

const initialState : UIState = {
    isMenuOpen: false
};

export const UIReducer = createReducer(
    initialState,
    on(openMenu, (state) => {
        console.log('abrir menu');
        return {
            ...state,
            isMenuOpen: true
        }
    }),
    on(closeMenu, (state) => {
        console.log('cerrar menu');
        return {
            ...state,
            isMenuOpen: false
        }
    })
)