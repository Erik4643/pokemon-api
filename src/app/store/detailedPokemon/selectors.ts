/* eslint-disable no-debugger */
import { createSelector } from 'reselect';

export const stateSelector = (state: any) => {
  return state.detailedPokemon;
};

export const isLoadingSelector = createSelector(
  stateSelector,
  ({ isLoading }) => ({ isLoading }),
);

export const detailedPokemonSelector = createSelector(
  stateSelector,
  ({ pokemonDetailed }) => ({ pokemonDetailed }),
);
