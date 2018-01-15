import { getStorySaga, API_URL } from './sagas'
import { call } from 'redux-saga/effects'
import { getStory } from './actions'

describe(`redux sagas`, () => {
  describe(`GetStory saga`, () => {
    test(`should make request to hacker news api`, () => {
      const storyId = 1
      const it = getStorySaga(getStory(storyId))
      expect(it.next().value).toEqual(call(fetch, `${API_URL}item/${storyId}.json`))
    })
  })
})
