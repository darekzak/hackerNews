import * as actions from '../actions'
import { put, takeEvery, all, call } from 'redux-saga/effects'
import { Action } from '../types'

export const API_URL = 'https://hacker-news.firebaseio.com/v0/'

function* getStoriesSaga() {
  try {
    const response = yield call(fetch, `${API_URL}topstories.json`)
    const stories = yield response.json()
    yield put(actions.getStoriesSucceeded(stories))
  } catch (error) {
    yield put(actions.getStoriesFailed(error.message))
  }
}

function* watchGetStories() {
  yield takeEvery(Action.GET_STORIES, getStoriesSaga)
}

export function* getStorySaga({ storyId }: any) {
  try {
    const response = yield call(fetch, `${API_URL}item/${storyId}.json`)
    const story = yield response.json()
    yield put(actions.getStorySucceeded(story))
  } catch (error) {
    yield put(actions.getStoryFailed(error.message))
  }
}

function* watchGetStory() {
  Action.GET_STORY
  yield takeEvery(Action.GET_STORY, getStorySaga)
}

export default function* rootSaga() {
  yield all([watchGetStories(), watchGetStory()])
}
