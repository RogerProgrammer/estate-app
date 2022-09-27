import { createAction } from "@ngrx/store";

export const openMenu = createAction(
    '[UI] - OPEN MENU'
);

export const closeMenu = createAction(
    '[UI] - CLOSE MENU'
);