import React      from 'react';
import PropTypes  from 'prop-types';
import { Button } from 'semantic-ui-react';

const Like = ({ id, like, dislike, likeFunc }) => (
  <div>
    <Button
      id={`like_button_${id}`}
      color='green'
      icon='thumbs outline up'
      onClick={() => likeFunc(id, 'like')}
      label={{ basic: true, color: 'black', pointing: 'left', content: like }}
    />
    <Button
      color='red'
      icon='thumbs outline down'
      onClick={() => likeFunc(id, 'dislike')}
      label={{ basic: true, color: 'black', pointing: 'left', content: dislike }}
    />
  </div>
);
Like.defaultProps = {};
Like.propTypes = {
  id:       PropTypes.number,
  like:     PropTypes.number,
  dislike:  PropTypes.number,
  likeFunc: PropTypes.func,
};

export default Like;
