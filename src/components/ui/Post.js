import React             from 'react';
import BlogItem          from 'components/ui/BlogItem';
import PropTypes         from 'prop-types';

const Post = ({ item }) => (
  <div>
    { item && <BlogItem
      key={item.id}
      {...item}
      // likeFunc={this.likeFunc}
      // dislikeFunc={this.dislikeFunc}
    /> }
  </div>
);

Post.defaultProps = {};
Post.propTypes = {
  item:       PropTypes.object
};

export default Post;
