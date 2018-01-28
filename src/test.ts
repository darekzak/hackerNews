import { getStorySaga, API_URL } from './sagas'
import { call, put } from 'redux-saga/effects'
import { getStory, getStorySucceeded, getStoryFailed } from './actions'
import { Story } from './types'

describe(`redux sagas`, () => {
  describe(`GetStory saga`, () => {
    const prepareTest = () => ({
      story: {
        id: 1,
        name: 'trolololo',
      },
      it: getStorySaga(getStory(1)),
    })

    test(`should dispatch GET_STORY_SUCCEEDED action when there is no error`, () => {
      const { story, it } = prepareTest()
      it.next() //call api
      const val = it.next({ json: () => story }).value
      expect(it.next(val).value).toEqual(put(getStorySucceeded(story)))
    })

    test(`should dispatch GET_STORY_FAILED if an error occurs`, () => {
      const { story, it } = prepareTest()
      it.next() //call api
      const errorMsg = 'error while converting response to json'
      const val = it.next({
        json: () => {
          throw Error(errorMsg)
        },
      }).value
      expect(val).toEqual(put(getStoryFailed(errorMsg)))
    })
  })
})
