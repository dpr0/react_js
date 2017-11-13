import PropTypes  from 'prop-types';
import { Button } from 'semantic-ui-react';

const Like = ({ like, dislike, likeFunc, dislikeFunc }) => (
  <div>
    Нравится: {like}
    <Button onClick={likeFunc}>LIKE!</Button>
    Не нравится: {dislike}
    <Button onClick={dislikeFunc}>DISLIKE!</Button>
  </div>
);
Like.defaultProps = {};
Like.propTypes = {
  like:        PropTypes.number,
  dislike:     PropTypes.number,
  likeFunc:    PropTypes.function,
  dislikeFunc: PropTypes.function
};

export default Like;
