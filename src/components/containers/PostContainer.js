import React        from 'react';
import PropTypes    from 'prop-types';
import { Item }     from 'semantic-ui-react';
import BlogItem     from 'components/ui/BlogItem';
import _            from 'lodash';
import request      from 'superagent';
import { API_ROOT } from 'constants/API';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {post: 0};
    this.likeFunc = _.bind(this.likeFunc, this);
    this.dislikeFunc = _.bind(this.dislikeFunc, this);
  }

  componentDidMount() {
    this.fetchPost();
  }

  fetchPost() {
    request.get(
      `${API_ROOT}/post/${this.props.params.id}`,
      {},
      (err, response) => this.setState({ post: response.body })
    );
  }

  likeFunc() {
    const clonedPost = _.cloneDeep(this.state.post);
    clonedPost.like = clonedPost.like ? (clonedPost.like + 1) : 1;
    this.setState({ post: clonedPost });
  }

  dislikeFunc() {
    const clonedPost = _.cloneDeep(this.state.post);
    clonedPost.dislike = clonedPost.dislike ? (clonedPost.dislike + 1) : 1;
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
