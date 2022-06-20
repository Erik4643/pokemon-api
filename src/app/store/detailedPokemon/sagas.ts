/* eslint-disable func-style */
import { PokemonDetailed } from 'app/models/pokemon/pokemon-detailed';
import { getPokemonByIdApi } from 'app/requests/pokemons';
import { all, takeEvery, put, call } from 'redux-saga/effects';

import { setDetailedPokemonAction, setDetailedPokemonIsLoadingAction } from './actions';
import { DETAILED_POKEMON_ACTION, IAttemptToGetPokemonByIdAction } from './types';

function* pokemonByIdWorker({
  payload,
}: Required<IAttemptToGetPokemonByIdAction>) {
  try {
    yield put(setDetailedPokemonIsLoadingAction({ isLoading: true }));

    const { pokemonId } = payload;
    const result: PokemonDetailed = yield call(getPokemonByIdApi, pokemonId);

    yield put(setDetailedPokemonAction({ pokemonDetailed: result }));
    yield put(setDetailedPokemonIsLoadingAction({ isLoading: false }));
  } catch (error) {
    yield put(setDetailedPokemonIsLoadingAction({ isLoading: false }));
  }
}

export default function* pokemonSaga() {
  yield all([
    takeEvery(
      DETAILED_POKEMON_ACTION.ATTEMPT_TO_SET_DETAILED_POKEMON,
      pokemonByIdWorker,
    ),
  ]);
}
