import { combineReducers } from 'redux';

import posts    from './Posts';
import post     from './Post';
import like     from './Like';
import dislike  from './Dislike';

export default combineReducers ({
  posts,
  post,
  like,
  dislike
});
