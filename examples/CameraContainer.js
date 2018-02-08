import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import CameraItem from '../ui/CameraItem';
import request from 'superagent';
import {apiCameraLink} from '../../helpers/apiServerHelper';

class CameraContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: props.params.id, camera: {}};
  }

  componentWillMount() {
    this.fetchCameras();
  }

  fetchCameras() {
    request.get(
      apiCameraLink(this.state.id),
      {},
      (err, res) => this.setState({ camera: res.body })
    );
  }

  render() {
    return (
      <Item.Group>
        <CameraItem
          {...this.state.camera}
        />
      </Item.Group>
    );
  }
}

CameraContainer.propTypes = {
  camera: PropTypes.object,
  id: PropTypes.number
};

export default CameraContainer;
