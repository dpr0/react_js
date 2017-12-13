import React      from 'react';
import Like       from 'components/ui/Like';
import Image      from 'components/ui/Image';
import TextBox    from 'components/ui/TextBox';
import Link       from 'components/elements/Link';
import { Item }   from 'semantic-ui-react';
import PropTypes  from 'prop-types';
import {postPath, postLikePath} from 'helpers/routes';

// const BlogItem = ({ id, like, dislike, title, body, image, meta, likeFunc, dislikeFunc }) => (
const BlogItem = ({ item }) => (
  <Item.Group>
    <div className="ui raised link card">
      { item && <div className="content">
        <Link to={postPath(item.id)}>{item.title}</Link>
        <TextBox body={item.body} meta={item.meta} />
        <div className="description">
          <Image {...item.image} />
          <Like
            like={item.like}
            dislike={item.dislike}
            // likeFunc={() => likeFunc(id)}
            // dislikeFunc={() => dislikeFunc(id)}
          />
        </div>
      </div> }
    </div>
  </Item.Group>
);

BlogItem.defaultProps = {};
BlogItem.propTypes = {
  item:        PropTypes.object
  // id:          PropTypes.number,
  // like:        PropTypes.number,
  // dislike:     PropTypes.number,
  // title:       PropTypes.string,
  // body:        PropTypes.string,
  // image:       PropTypes.object,
  // meta:        PropTypes.object,
  // likeFunc:    PropTypes.func,
  // dislikeFunc: PropTypes.func
};

export default BlogItem;
