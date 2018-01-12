import * as React from 'react'

const Story = ({ story }) => (
  <div>
    <h2> story {story.data.id}</h2>
    {story.isFetching ? 'loading...' : ''}
    {story.error ? `error: ${story.error}` : ''}
    <div>data: {JSON.stringify(story.data)}</div>
  </div>
)

export default Story
