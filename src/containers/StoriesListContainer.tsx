import { connect } from 'react-redux'
import StoriesList from '../components/StoriesList'
import * as React from 'react'
import { store } from '../index'
import { getStories } from '../actions/index'
import { State, Stories } from '../types'

type Props = {
  stories: Stories
}

const mapStateToProps = (state: State) => ({
  stories: state.stories,
})

class StoriesListContainer extends React.Component {
  props: Props

  componentDidMount() {
    store.dispatch(getStories())
  }

  render() {
    return <StoriesList stories={this.props.stories} />
  }
}

export default connect(mapStateToProps)(StoriesListContainer)
