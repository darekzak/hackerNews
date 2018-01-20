import { State, ActionType, Action } from '../types'

const initialState: State = {
  stories: {
    items: [],
    isFetching: false,
    error: '',
  },
  story: {
    isFetching: false,
    error: '',
  },
}

export default function(state: State = initialState, action: Action) {
  switch (action.type) {
    case ActionType.GET_STORIES:
      return {
        ...state,
        stories: {
          ...state.stories,
          isFetching: true,
          error: '',
        },
      }
    case ActionType.GET_STORIES_SUCCEEDED:
      return {
        ...state,
        stories: {
          items: action.stories,
          isFetching: false,
          error: '',
        },
      }
    case ActionType.GET_STORIES_FAILED:
      return {
        ...state,
        stories: {
          ...state.stories,
          isFetching: false,
          error: action.error,
        },
      }
    case ActionType.GET_STORY:
      return {
        ...state,
        story: {
          isFetching: true,
          error: '',
          data: {
            id: action.storyId,
          },
        },
      }
    case ActionType.GET_STORY_SUCCEEDED:
      return {
        ...state,
        story: {
          isFetching: false,
          error: '',
          data: action.story,
        },
      }
    case ActionType.GET_STORY_FAILED:
      return {
        ...state,
        story: {
          ...state.story,
          error: action.error,
          isFetching: false,
        },
      }
    default:
      return state
  }
}
