import React      from 'react';
import Like       from './Like';
import Image      from './Image';
import TextBox    from './TextBox';
import Link       from '../../components/elements/Link';
import PropTypes  from 'prop-types';
import { Grid, Segment } from 'semantic-ui-react';
import { postPath } from '../../helpers/routes';

const BlogItem = ({ id, like, dislike, title, body, image, meta, likeFunc, dislikeFunc }) => (
  <div>
    <hr />
    <Grid columns={3} relaxed>
      <Grid.Column>
        <Segment basic>
          <Link to={postPath(id)}>{title}</Link>
          <TextBox body={body} meta={meta} />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment basic>
          <Image {...image} />
        </Segment>
      </Grid.Column>
    </Grid>
    <Like
      like={like}
      dislike={dislike}
      likeFunc={() => likeFunc(id)}
      dislikeFunc={() => dislikeFunc(id)}
    />
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
