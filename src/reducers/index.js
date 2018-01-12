import { actionType } from '../actions'

const initialState = {
  stories: {
    items: [],
    isFetching: false,
    error: '',
  },
  story: {
    isFetching: false,
    data: {},
    error: '',
  },
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actionType.GET_STORIES:
      return {
        ...state,
        stories: {
          ...state.stories,
          isFetching: true,
          error: '',
        },
      }
    case actionType.GET_STORIES_SUCCEEDED:
      return {
        ...state,
        stories: {
          items: action.stories,
          isFetching: false,
          error: '',
        },
      }
    case actionType.GET_STORIES_FAILED:
      return {
        ...state,
        stories: {
          ...state.stories,
          isFetching: false,
          error: action.error,
        },
      }
    case actionType.GET_STORY:
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
    case actionType.GET_STORY_SUCCEEDED:
      return {
        ...state,
        story: {
          isFetching: false,
          error: '',
          data: action.story,
        },
      }
    case actionType.GET_STORY_FAILED:
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
