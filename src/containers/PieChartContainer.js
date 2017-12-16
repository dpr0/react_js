import { connect } from 'react-redux';
import Chart from 'components/ui/Chart';

const stateToProps = (state) => ({
  items:      state.posts.entries,
  loading: state.posts.loading,
  error:      state.posts.error
});

export default connect(stateToProps)(Chart);