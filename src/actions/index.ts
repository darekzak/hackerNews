import {
  Stories,
  Story,
  GetStoryAction,
  GetStoriesFailedAction,
  GetStoriesSucceededAction,
  GetStoriesAction,
  GetStorySucceededAction,
  GetStoryFailedAction,
} from '../types'
import { ActionType } from '../types'

export const getStories = (): GetStoriesAction => ({
  type: ActionType.GET_STORIES,
})

export const getStoriesSucceeded = (stories: Stories['items']): GetStoriesSucceededAction => ({
  type: ActionType.GET_STORIES_SUCCEEDED,
  stories,
})

export const getStoriesFailed = (error: string): GetStoriesFailedAction => ({
  type: ActionType.GET_STORIES_FAILED,
  error,
})

export const getStory = (storyId: number): GetStoryAction => ({
  type: ActionType.GET_STORY,
  storyId,
})

export const getStorySucceeded = (story: Story['data']): GetStorySucceededAction => ({
  type: ActionType.GET_STORY_SUCCEEDED,
  story,
})

export const getStoryFailed = (error: string): GetStoryFailedAction => ({
  type: ActionType.GET_STORY_FAILED,
  error,
})
