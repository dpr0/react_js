import React         from 'react';
import _             from 'lodash';
import BlogList      from '../ui/BlogList';
import PieChart      from '../ui/PieChart';
import PieChartLikes from '../ui/PieChartLikes';
import PropTypes     from 'prop-types';
import { posts as staticPosts } from 'constants/static/posts';
import { Grid, Segment } from 'semantic-ui-react';

class BlogPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: staticPosts };
    this.likeFunc = _.bind(this.likeFunc, this);
    this.dislikeFunc = _.bind(this.dislikeFunc, this);
  }

  likeFunc(id) {
    const clonedPosts = _.cloneDeep(this.state.posts);
    _.each(clonedPosts, (post) => {
      if (post.id == id) {
        post.like == undefined ? (post.like = 1) : (post.like += 1);
        this.setState({ posts: clonedPosts });}
    });
  }

  dislikeFunc(id) {
    const clonedPosts = _.cloneDeep(this.state.posts);
    _.each(clonedPosts, (post) => {
      if (post.id == id) {
        post.dislike == undefined ? (post.dislike = 1) : (post.dislike += 1);
        this.setState({ posts: clonedPosts });}
    });
  }

  render() {
    return (
      <div>
        <Grid columns={3} relaxed>
          <Grid.Column>
            <Segment basic>
              <PieChartLikes
                postsLikes={
                  _.map(this.state.posts,
                    function(post) { return [post.id, post.like]; }
                  )
                }
              />
            </Segment>
            <PieChart posts={this.state.posts} />
          </Grid.Column>
          <Grid.Column>
            <Segment basic>
              <BlogList
                posts={this.state.posts}
                likeFunc={this.likeFunc}
                dislikeFunc={this.dislikeFunc}
              />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
BlogPageContainer.defaultProps = {};
BlogPageContainer.propTypes = {posts: PropTypes.object};

export default BlogPageContainer;
