import React             from 'react';
import BlogItem          from 'components/ui/BlogItem';
import PropTypes         from 'prop-types';

const Post = ({ item, likeFunc }) => (
  <div>
    { item && <BlogItem
      key={item.id}
      {...item}
      likeFunc={likeFunc}
    /> }
  </div>
);

Post.defaultProps = {};
Post.propTypes = {
  item:     PropTypes.object,
  likeFunc: PropTypes.func
};

export default Post;
