import { createSelector } from '@ngrx/store';
import { AppState } from '../../app/interfaces/appState.interface';
import { UIState } from '../../app/interfaces/ui.interface';

export const selectUiFeature = (state: AppState) => state.ui;

export const selectIsMenuOpen = createSelector(
    selectUiFeature,
    (state: UIState) => state.isMenuOpen
);