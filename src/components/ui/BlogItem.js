import React         from 'react';
import Like          from 'components/ui/Like';
import Image         from 'components/ui/Image';
import TextBox       from 'components/ui/TextBox';
import Link          from 'components/elements/Link';
import { Item }      from 'semantic-ui-react';
import PropTypes     from 'prop-types';
import { postPath }  from 'helpers/routes';

const BlogItem = ({ id, like, dislike, title, body, image, meta, likeFunc }) => (
  <Item.Group>
    <div className="ui raised link card">
      { id && <div className="content">
        <Link to={postPath(id)} id={`post_id_${id}`}>{title}</Link>
        <TextBox body={body} meta={meta} />
        <div className="description">
          <Image {...image} />
          <Like
            id={id}
            like={like}
            dislike={dislike}
            likeFunc={likeFunc}
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
  likeFunc:    PropTypes.func
};

export default BlogItem;
