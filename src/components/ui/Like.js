import React      from 'react';
import PropTypes  from 'prop-types';
import { Button } from 'semantic-ui-react';

const Like = ({ like, dislike, likeFunc, dislikeFunc }) => (
  <div>
    <Button size='small' color='green' onClick={likeFunc}>LIKE! {like}</Button>
    <Button size='small' color='red' onClick={dislikeFunc}>DISLIKE! {dislike}</Button>
  </div>
);
Like.defaultProps = {};
Like.propTypes = {
  like:        PropTypes.number,
  dislike:     PropTypes.number,
  likeFunc:    PropTypes.func,
  dislikeFunc: PropTypes.func
};

export default Like;
