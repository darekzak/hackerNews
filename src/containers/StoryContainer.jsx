import * as React from 'react'
import { connect } from 'react-redux'
import Story from '../components/Story'
import { getStory } from '../actions'

class StoryContainer extends React.Component {

  componentDidMount() {
    this.props.getStory(this.props.storyId)
  }

  render() {
    return <Story story={this.props.story} />
  }
}


const mapStateToProps = (state, props) => {
  const { storyId } = props.match.params
  return {
    story: state.story,
    storyId,
  }
}

const mapDispatchToProps = dispatch => ({
  getStory: storyId => dispatch(getStory(storyId))
})

export default connect(mapStateToProps, mapDispatchToProps)(StoryContainer)