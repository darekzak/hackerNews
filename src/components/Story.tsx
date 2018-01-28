import * as React from 'react'
import * as t from '../types'
import { Spinner } from 'react-mdl'
import * as ReactDOM from 'react-dom'
import Modal from './Modal'

const iframeStyles = { width: '100%', height: '100%', backgroundColor: 'white' }

class Story extends React.Component {
  props: { story: t.Story }
  state = { modalOpen: false }

  openStory = () => {
    return <iframe src={this.props.story.data!.url} frameBorder={0} style={iframeStyles} />
  }

  render() {
    const { story, story: { data } } = this.props

    return (
      <div>
        <h2>story {data && data.id}</h2>
        {story.isFetching && <Spinner />}
        {story.error && `error: ${story.error}`}

        {data && (
          <button onClick={() => this.setState(() => ({ modalOpen: true }))}>
            open story in modal
          </button>
        )}
        <div>data: {JSON.stringify(data)}</div>

        {this.state.modalOpen && (
          <Modal
            render={this.openStory}
            onClose={() => this.setState(() => ({ modalOpen: false }))}
          />
        )}
      </div>
    )
  }
}

export default Story
