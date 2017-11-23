import React     from 'react';
import PropTypes from 'prop-types';
import { Item }  from 'semantic-ui-react';
import { posts } from '../../constants/static/posts';
import BlogItem  from '../ui/BlogItem';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {post: posts[props.params.id-1]};
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
          {...this.state.post}
          likeFunc={this.likeFunc}
          dislikeFunc={this.dislikeFunc}
        />
      </Item.Group>
    );
  }
}

PostContainer.propTypes = { post: PropTypes.object };

export default PostContainer;
