import React             from 'react';
import _                 from 'lodash';
import BlogList          from 'components/ui/BlogList';
import PieChart          from 'components/ui/PieChart';
import PieChartLikes     from 'components/ui/PieChartLikes';
import PropTypes         from 'prop-types';
import request           from 'superagent';
import { Grid, Segment } from 'semantic-ui-react';

class BlogPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.likeFunc = _.bind(this.likeFunc, this);
    this.dislikeFunc = _.bind(this.dislikeFunc, this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      'http://localhost:3001',
      {},
      (err, res) => this.setState({ posts: res.body })
    );
  }

  likeFunc(id) {
    const clonedPosts = _.cloneDeep(this.state.posts);
    _.each(clonedPosts, (post) => {
      if (post.id == id) {
        post.like = post.like ? (post.like + 1) : 1;
        this.setState({ posts: clonedPosts });}
    });
  }

  dislikeFunc(id) {
    const clonedPosts = _.cloneDeep(this.state.posts);
    _.each(clonedPosts, (post) => {
      if (post.id == id) {
        post.dislike = post.dislike ? (post.dislike + 1) : 1;
        this.setState({ posts: clonedPosts });}
    });
  }

  render() {
    return (
      <div>
        <Grid columns={3} relaxed>
          <Grid.Column>
            <Segment basic>
              <BlogList
                posts={this.state.posts}
                likeFunc={this.likeFunc}
                dislikeFunc={this.dislikeFunc}
              />
            </Segment>
          </Grid.Column>
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
            <Segment basic>
              <PieChart posts={this.state.posts} />
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
