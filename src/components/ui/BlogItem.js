import React      from 'react';
import Like       from '../ui/Like';
import Image      from '../ui/Image';
import TextBox    from '../ui/TextBox';
import PropTypes  from 'prop-types';

class BlogItem extends React.Component {
  render() {
    const { id, like, dislike, title, body, image, meta, likeFunc, dislikeFunc } = this.props;
    return (
      <div>
        <TextBox id={id} title={title} body={body} meta={meta} />
        <Like
          like={like}
          dislike={dislike}
          likeFunc={() => likeFunc(id)}
          dislikeFunc={() => dislikeFunc(id)}
        />
        <Image {...image} />
      </div>

    );
  }
}
BlogItem.defaultProps = {};
BlogItem.propTypes = {
  id:          PropTypes.number,
  like:        PropTypes.number,
  dislike:     PropTypes.number,
  title:       PropTypes.string,
  body:        PropTypes.string,
  image:       PropTypes.object,
  meta:        PropTypes.object,
  likeFunc:    PropTypes.function,
  dislikeFunc: PropTypes.function
};

export default BlogItem;
