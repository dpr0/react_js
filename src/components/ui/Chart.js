import React             from 'react';
import PieChart          from 'components/ui/PieChart';
import PieChartLikes     from 'components/ui/PieChartLikes';
import PropTypes         from 'prop-types';
import { map }           from 'lodash/collection';

const Post = ({ items }) => (
  <div>
    { __CLIENT__ && <PieChartLikes
      postsLikes={
        map(items,
          (post) => ([post.id, post.like])
        )
      }
    /> }
    { __CLIENT__ && <PieChart posts={items} /> }
  </div>
);

Post.defaultProps = {};
Post.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default Post;
