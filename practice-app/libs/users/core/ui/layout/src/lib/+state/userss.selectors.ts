import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  USERSS_FEATURE_KEY,
  UserssState,
  userssAdapter,
} from './userss.reducer';

// Lookup the 'Userss' feature state managed by NgRx
export const selectUserssState =
  createFeatureSelector<UserssState>(USERSS_FEATURE_KEY);

const { selectAll, selectEntities } = userssAdapter.getSelectors();

export const selectUserssLoaded = createSelector(
  selectUserssState,
  (state: UserssState) => state.loaded
);

export const selectUserssError = createSelector(
  selectUserssState,
  (state: UserssState) => state.error
);

export const selectAllUserss = createSelector(
  selectUserssState,
  (state: UserssState) => selectAll(state)
);

export const selectUserssEntities = createSelector(
  selectUserssState,
  (state: UserssState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectUserssState,
  (state: UserssState) => state.selectedId
);

export const selectEntity = createSelector(
  selectUserssEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
