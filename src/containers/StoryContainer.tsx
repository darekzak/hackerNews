import * as React from 'react'
import { connect } from 'react-redux'
import Story from '../components/Story'
import { getStory } from '../actions'
import { store } from '../index'

type Props = {
  storyId: number
  story: any
}

class StoryContainer extends React.Component {
  props: Props
  componentDidMount() {
    store.dispatch(getStory(this.props.storyId))
  }

  render() {
    return <Story story={this.props.story} />
  }
}

const mapStateToProps = (state: any, props: any) => {
  const { storyId } = props.match.params
  return {
    story: state.story,
    storyId,
  }
}

export default connect(mapStateToProps)(StoryContainer)
