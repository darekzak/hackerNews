import { connect } from 'react-redux'
import StoriesList from '../components/StoriesList'

const mapStateToProps = state => ({
  stories: state.stories,
})

const StoriesListContainer = connect(mapStateToProps)(StoriesList)

export default StoriesListContainer