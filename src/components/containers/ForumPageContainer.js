import React from 'react';
import _ from 'lodash';
import CameraList from '../ui/CameraList';
import PropTypes from 'prop-types';
import request from 'superagent';
import { apiCamerasLink } from '../../helpers/apiServerHelper';

class ForumPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cameras: []};
    this.likeFunc = _.bind(this.likeFunc, this);
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

ForumPageContainer.propTypes = { post: PropTypes.object };

export default ForumPageContainer;