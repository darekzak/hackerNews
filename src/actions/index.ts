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

type GetStories = () => GetStoriesAction
export const getStories: GetStories = () => ({
  type: ActionType.GET_STORIES,
})

type GetStoriesSucceeded = (x: Stories) => GetStoriesSucceededAction
export const getStoriesSucceeded: GetStoriesSucceeded = stories => ({
  type: ActionType.GET_STORIES_SUCCEEDED,
  stories,
})

type GetStoriesFailed = (x: string) => GetStoriesFailedAction
export const getStoriesFailed: GetStoriesFailed = error => ({
  type: ActionType.GET_STORIES_FAILED,
  error,
})

type GetStory = (x: number) => GetStoryAction
export const getStory: GetStory = storyId => ({
  type: ActionType.GET_STORY,
  storyId,
})

type GetStorySucceeded = (x: Story) => GetStorySucceededAction
export const getStorySucceeded: GetStorySucceeded = story => ({
  type: ActionType.GET_STORY_SUCCEEDED,
  story,
})

type GetStoryFailed = (x: string) => GetStoryFailedAction
export const getStoryFailed: GetStoryFailed = error => ({
  type: ActionType.GET_STORY_FAILED,
  error,
})
