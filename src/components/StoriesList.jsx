import * as React from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'react-mdl'

const StoriesList = ({ stories }) => (
  <React.Fragment>
    <h1>Top Stories List</h1>
    {stories.isFetching ? 'loading...' : ''}
    {stories.error ? `error: ${stories.error}` : ''}

    <List>
      {stories.items.map(id => (
        <ListItem key={id}>
          <Link to={`/story/${id}`}>{id}</Link>
        </ListItem>
      ))}
    </List>
  </React.Fragment>
)

export default StoriesList
