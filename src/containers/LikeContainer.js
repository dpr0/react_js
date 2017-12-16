import { connect } from 'react-redux';
import Like from 'components/ui/Like';
import { likeFunc, dislikeFunc } from 'actions/Like';

const stateToProps = (state, ownProps) => ({
  id:      ownProps.id,
  like:    ownProps.like,
  dislike: ownProps.dislike
});

const actionToProps = (dispatch) => ({
  likeFunc:    (id) => { dispatch(likeFunc(id)); },
  dislikeFunc: (id) => { dispatch(dislikeFunc(id)); },
});

export default connect(stateToProps, actionToProps)(Like);
