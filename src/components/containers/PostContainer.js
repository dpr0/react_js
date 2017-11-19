import React, { PropTypes } from 'react';
import { Item }  from 'semantic-ui-react';
import { posts } from '../../constants/static/posts';
import BlogItem  from '../ui/BlogItem';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: posts[props.id - 1] };
    this.likeFunc = _.bind(this.likeFunc, this);
    this.dislikeFunc = _.bind(this.dislikeFunc, this);
  }

  likeFunc() {
    const clonedPost = _.cloneDeep(this.state.post);
    clonedPost.like == undefined ? (clonedPost.like = 1) : (clonedPost.like += 1);
    this.setState({ post: clonedPost });
  }

  dislikeFunc() {
    const clonedPost = _.cloneDeep(this.state.post);
    clonedPost.dislike == undefined ? (clonedPost.dislike = 1) : (clonedPost.dislike += 1);
    this.setState({ post: clonedPost });
  }

  render() {
    return (
      <Item.Group>
        <BlogItem
          post={ posts[this.state.id - 1] }
          likeFunc={this.likeFunc}
          dislikeFunc={this.dislikeFunc}
        />
      </Item.Group>
    );
  }
}

// Post.propTypes = { params: PropTypes.object };

export default PostContainer;
