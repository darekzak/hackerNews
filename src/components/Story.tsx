import * as React from 'react'
import { Story } from '../types'

const Story = ({ story }: { story: Story }) => (
  <div>
    <h2> story {story.data.id}</h2>
    {story.isFetching ? 'loading...' : ''}
    {story.error ? `error: ${story.error}` : ''}
    <div>data: {JSON.stringify(story.data)}</div>
  </div>
)

export default Story
