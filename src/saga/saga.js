import { take, put, spawn, debounce, takeLatest, retry, race, cancel, fork, call } from 'redux-saga/effects';
import { searchSkillsRequest, startSkillsRequest, setSkills, setError, setInitState } from '../actions/actions'

function* changeSearchSaga(action) {
  yield put(startSkillsRequest(action.payload));
}

function* watchChangeSearchSaga(action) {
  yield debounce(300, 'CHANGE_SEARCH_FIELD', changeSearchSaga)
}

function* skillsRequest(action) {
  if (action.payload.trim() !== '') {
    try {
      const data = yield retry(3, 1000, searchSkillsRequest, action.payload);
      yield put(setSkills(data))
    } catch (error) {
      yield put(setError(error.message))
    }
  } else yield put(setInitState());
}

function* watchSearchSkillsRequest(action) {
  yield takeLatest('START_SKILLS_REQUEST', skillsRequest)
}

export default function* saga() {
  yield spawn(watchChangeSearchSaga)
  yield spawn(watchSearchSkillsRequest)
}
