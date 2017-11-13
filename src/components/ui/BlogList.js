import React     from 'react';
import BlogItem  from '../ui/BlogItem';
import _         from 'lodash';

const BlogList = ({ posts, likeFunc, dislikeFunc }) => (
  <div className='bloglist'>
    {_.map(posts,
      (hash) => (
        <BlogItem
          key={hash.id}
          {...hash}
          likeFunc={likeFunc}
          dislikeFunc={dislikeFunc}
        />
      )
    )}
  </div>
);
BlogList.defaultProps = {};
BlogList.propTypes = {};

export default BlogList;
