import React      from 'react';
import Image      from './Image';
import TextBox    from './TextBox';
import PropTypes  from 'prop-types';
import Link       from '../../components/elements/Link';
import { Grid, Segment } from 'semantic-ui-react';
import { cameraPath } from '../../helpers/routes';
import formatedLink from '../../helpers/dyxumHelper';

const CameraItem = ({
  id, brand, name, mount, ff, created_at, updated_at, full_name,
  dyxum_img_link, status, format, max_resolution
}) => (
  <div>
    <hr />
    <Grid columns={3} relaxed>
      <Grid.Column>
        <Segment basic>
          <Link to={cameraPath(id)}>{full_name}</Link>
          <TextBox title={brand} body={name} meta={{createdAt: created_at, updatedAt: updated_at}} />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment basic>
          <Image src={formatedLink(dyxum_img_link)} />
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
);

CameraItem.defaultProps = {};
CameraItem.propTypes = {
  id:             PropTypes.number,
  brand:          PropTypes.string,
  name:           PropTypes.string,
  mount:          PropTypes.string,
  ff:             PropTypes.bool,
  created_at:     PropTypes.string,
  updated_at:     PropTypes.string,
  full_name:      PropTypes.string,
  dyxum_img_link: PropTypes.string,
  status:         PropTypes.string,
  format:         PropTypes.string,
  max_resolution: PropTypes.string
};

export default CameraItem;
