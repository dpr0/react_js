import React             from 'react';
import BlogItem          from 'components/ui/BlogItem';
import PieChart          from 'components/ui/PieChart';
import PieChartLikes     from 'components/ui/PieChartLikes';
import { map }           from 'lodash';
import PropTypes         from 'prop-types';
import { Grid, Segment } from 'semantic-ui-react';

const BlogList = ({ items }) => (
  <div>
    <Grid columns={3} relaxed>
      <Grid.Column>
        <Segment basic>
          <div className='bloglist'>
            { map(items,
              (hash) => (
                <BlogItem
                  key={hash.id}
                  {...hash}
                  // likeFunc={this.likeFunc}
                  // dislikeFunc={this.dislikeFunc}
                />
              )
            )}
          </div>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment basic>
          <PieChartLikes
            postsLikes={
              _.map(items,
                function(post) { return [post.id, post.like]; }
              )
            }
          />
        </Segment>
        <Segment basic>
          <PieChart posts={items} />
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
);

BlogList.defaultProps = {};
BlogList.propTypes = {
  posts:       PropTypes.array,
  likeFunc:    PropTypes.func,
  dislikeFunc: PropTypes.func
};

export default BlogList;
