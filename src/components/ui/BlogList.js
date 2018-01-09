import React             from 'react';
import BlogItem          from 'components/ui/BlogItem';
import PieChart          from 'components/ui/PieChart';
import { map, times }    from 'lodash';
import PropTypes         from 'prop-types';
import { Grid, Segment, Menu } from 'semantic-ui-react';

const BlogList = ({ items, page, postsLength, likeFunc, pageClick }) => (
  <div>
    <Menu borderless>
      {
        map(
          map(times(Math.ceil(postsLength / 2), String), (n) => (parseInt(n))),
          (i) => (
            <Menu.Item
              key={i}
              name={i + 1}
              page={i}
              active={page === i}
              onClick={() => pageClick(i)}
            />
          )
        )
      }
    </Menu>

    <Grid columns={3} relaxed>
      <Grid.Column>
        <Segment basic>
          <div className='bloglist'>
            { map(items,
              (post) => (
                <BlogItem
                  id={post.id}
                  key={post.id}
                  {...post}
                  likeFunc={likeFunc}
                />
              )
            )}
          </div>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment basic>
          <PieChart posts={items} />
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
);

BlogList.defaultProps = {};
BlogList.propTypes = {
  items:       PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  page:        PropTypes.number,
  postsLength: PropTypes.number,
  likeFunc:    PropTypes.func,
  pageClick:   PropTypes.func,
};

export default BlogList;
