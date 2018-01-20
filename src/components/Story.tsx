import * as React from 'react'
import { Story } from '../types'
import { Spinner } from 'react-mdl'

const Story = ({ story }: { story: Story }) => (
  <div>
    <h2> story {story.data && story.data.id}</h2>
    {story.isFetching && <Spinner />}
    {story.error && `error: ${story.error}`}
    <div>data: {JSON.stringify(story.data)}</div>
  </div>
)

export default Story
