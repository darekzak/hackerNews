import * as React from 'react'
import StoriesListContainer from './containers/StoriesListContainer'
import StoryContainer from './containers/StoryContainer'
import { getStories } from './actions'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default () => (
  <Router>
    <React.Fragment>
      <h1>
        <Link to="/">Hacker News</Link>
      </h1>
      <Route exact path="/" component={StoriesListContainer} />
      <Route path="/story/:storyId" component={StoryContainer} />
    </React.Fragment>
  </Router>
)
