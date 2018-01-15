import { Stories, Story } from '../types'
import { ActionType } from '../types'

export const getStories = () => ({
  type: ActionType.GET_STORIES,
})

export const getStoriesSucceeded = (stories: Stories) => ({
  type: ActionType.GET_STORIES_SUCCEEDED,
  stories,
})

export const getStoriesFailed = (error: string) => ({
  type: ActionType.GET_STORIES_FAILED,
  error,
})

export const getStory = (storyId: number) => ({
  type: ActionType.GET_STORY,
  storyId,
})

export const getStorySucceeded = (story: Story) => ({
  type: ActionType.GET_STORY_SUCCEEDED,
  story,
})

export const getStoryFailed = (error: string) => ({
  type: ActionType.GET_STORY_FAILED,
  error,
})
