import { getStorySaga, API_URL } from './sagas'
import { call } from 'redux-saga/effects'

test(`should`, () => {
  const storyId = 1
  const it = getStorySaga({ storyId })

  expect(it.next().value).toEqual(call(fetch, `${API_URL}item/${storyId}.json`))
})