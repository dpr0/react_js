import React         from 'react';
import _             from 'lodash';
import BlogList      from '../ui/BlogList';
import PieChart      from '../ui/PieChart';
import PieChartLikes from '../ui/PieChartLikes';

class BlogPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: props.posts };
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
        <PieChart posts={this.state.posts} />
        <PieChartLikes postsLikes={
          _.map(this.state.posts,
            function(post) { return [post.id, post.like]; }
          )
        }
        />
        <BlogList
          posts={this.state.posts}
          likeFunc={this.likeFunc}
          dislikeFunc={this.dislikeFunc}
        />
      </div>
    );
  }
}
BlogPageContainer.defaultProps = {};
BlogPageContainer.propTypes = {};

export default BlogPageContainer;

