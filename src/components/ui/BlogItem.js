import React         from 'react';
import LikeContainer from 'containers/LikeContainer';
import Image         from 'components/ui/Image';
import TextBox       from 'components/ui/TextBox';
import Link          from 'components/elements/Link';
import { Item }      from 'semantic-ui-react';
import PropTypes     from 'prop-types';
import { postPath }  from 'helpers/routes';

const BlogItem = ({ id, like, dislike, title, body, image, meta }) => (
  <Item.Group>
    <div className="ui raised link card">
      { id && <div className="content">
        <Link to={postPath(id)}>{title}</Link>
        <TextBox body={body} meta={meta} />
        <div className="description">
          <Image {...image} />
          <LikeContainer
            id={id}
            like={like}
            dislike={dislike}
          />
        </div>
      </div> }
    </div>
  </Item.Group>
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
