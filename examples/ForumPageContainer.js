import React from 'react';
import CameraList from '../ui/CameraList';
import PropTypes from 'prop-types';
import request from 'superagent';
import { apiCamerasLink } from '../../helpers/apiServerHelper';

class ForumPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cameras: []};
  }

  componentWillMount() {
    this.fetchCameras();
  }

  fetchCameras() {
    request.get(
      apiCamerasLink(),
      {},
      (err, res) => this.setState({ cameras: res.body })
    );
  }

  render() {
    return (
      <div>
        <CameraList cameras={this.state.cameras} />
      </div>
    );
  }
}

ForumPageContainer.propTypes = { cameras: PropTypes.array };

export default ForumPageContainer;
