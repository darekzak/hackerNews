import { Stories, Story } from './index'

export const enum ActionType {
  GET_STORIES = 'GET_STORIES',
  GET_STORIES_SUCCEEDED = 'GET_STORIES_SUCCEEDED',
  GET_STORIES_FAILED = 'GET_STORIES_FAILED',
  GET_STORY = 'GET_STORY',
  GET_STORY_SUCCEEDED = 'GET_STORY_SUCCEEDED',
  GET_STORY_FAILED = 'GET_STORY_FAILED',
}

export type Action =
  | GetStoriesAction
  | GetStoriesSucceededAction
  | GetStoriesFailedAction
  | GetStoryAction
  | GetStorySucceededAction
  | GetStoryFailedAction

export type GetStoriesAction = {
  type: ActionType.GET_STORIES
}

export type GetStoriesSucceededAction = {
  type: ActionType.GET_STORIES_SUCCEEDED
  stories: Stories['items']
}

export type GetStoriesFailedAction = {
  type: ActionType.GET_STORIES_FAILED
  error: string
}

export type GetStoryAction = {
  type: ActionType.GET_STORY
  storyId: number
}

export type GetStorySucceededAction = {
  type: ActionType.GET_STORY_SUCCEEDED
  story: Story['data']
}

export type GetStoryFailedAction = {
  type: ActionType.GET_STORY_FAILED
  error: string
}
