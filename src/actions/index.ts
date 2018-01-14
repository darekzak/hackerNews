import { Stories, Story } from '../types'
import { Action } from '../types'

export const getStories = () => ({
  type: Action.GET_STORIES,
})

export const getStoriesSucceeded = (stories: Stories) => ({
  type: Action.GET_STORIES_SUCCEEDED,
  stories,
})

export const getStoriesFailed = (error: string) => ({
  type: Action.GET_STORIES_FAILED,
  error,
})

export const getStory = (storyId: number) => ({
  type: Action.GET_STORY,
  storyId,
})

export const getStorySucceeded = (story: Story) => ({
  type: Action.GET_STORY_SUCCEEDED,
  story,
})

export const getStoryFailed = (error: string) => ({
  type: Action.GET_STORY_FAILED,
  error,
})
