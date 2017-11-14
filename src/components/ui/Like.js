import React      from 'react';
import PropTypes  from 'prop-types';
import { Button } from 'semantic-ui-react';

const Like = ({ like, dislike, likeFunc, dislikeFunc }) => (
  <div>
    <Button
      color='green'
      icon='thumbs outline up'
      onClick={likeFunc}
      label={{ basic: true, color: 'black', pointing: 'left', content: like }}
    />
    <Button
      color='red'
      icon='thumbs outline down'
      onClick={dislikeFunc}
      label={{ basic: true, color: 'black', pointing: 'left', content: dislike }}
    />
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
