import React      from 'react';
import Like       from 'components/ui/Like';
import Image      from 'components/ui/Image';
import TextBox    from 'components/ui/TextBox';
import Link       from 'components/elements/Link';
import PropTypes  from 'prop-types';
import {postPath} from 'helpers/routes';

const BlogItem = ({ id, like, dislike, title, body, image, meta, likeFunc, dislikeFunc }) => (
  <div className="ui raised link card">
    <div className="content">
      <Link to={postPath(id)}>{title}</Link>
      <TextBox body={body} meta={meta} />
      <div className="description">
        <Image {...image} />
        <Like
          like={like}
          dislike={dislike}
          likeFunc={() => likeFunc(id)}
          dislikeFunc={() => dislikeFunc(id)}
        />
      </div>
    </div>
  </div>
);
BlogItem.defaultProps = {};
BlogItem.propTypes = {
  id:          PropTypes.number,
  like:        PropTypes.number,
  dislike:     PropTypes.number,
  title:       PropTypes.string,
  body:        PropTypes.string,
  image:       PropTypes.object,
  meta:        PropTypes.object,
  likeFunc:    PropTypes.func,
  dislikeFunc: PropTypes.func
};

export default BlogItem;
