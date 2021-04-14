import { connect } from 'react-redux'
import Link from '../components/Link'
import { setVisibilityFilter } from '../actions'
import type { Dispatch } from 'redux'
import type { RootState } from '../types/store'
import type { Filter } from '../types/actions'

type OwnProps = {
  filter: Filter;
}
const mapStateToProps = (
  state: RootState,
  ownProps: OwnProps,
) => ({
  active: state.visibilityFilter === ownProps.filter
})

const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: OwnProps,
) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
