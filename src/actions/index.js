export const actionType = {
  GET_STORIES: 'GET_STORIES',
  GET_STORIES_SUCCEEDED: 'GET_STORIES_SUCCEEDED',
  GET_STORIES_FAILED: 'GET_STORIES_FAILED',
  GET_STORY: 'GET_STORY',
  GET_STORY_SUCCEEDED: 'GET_STORY_SUCCEEDED',
  GET_STORY_FAILED: 'GET_STORY_FAILED',
}

export const getStories = () => ({
  type: actionType.GET_STORIES,
})

export const getStoriesSucceeded = stories => ({
  type: actionType.GET_STORIES_SUCCEEDED,
  stories
})

export const getStoriesFailed = error => ({
  type: actionType.GET_STORIES_FAILED,
  error
})

export const getStory = storyId => ({
  type: actionType.GET_STORY,
  storyId
})

export const getStorySucceeded = story => ({
  type: actionType.GET_STORY_SUCCEEDED,
  story
})

export const getStoryFailed = error => ({
  type: actionType.GET_STORY_FAILED,
  error
})