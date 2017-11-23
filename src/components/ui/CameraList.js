import React     from 'react';
import CameraItem  from '../ui/CameraItem';
import _         from 'lodash';
import PropTypes from 'prop-types';

const CameraList = ({ cameras }) => (
  <div className='bloglist'>
    {_.map(cameras,
      (camera) => (
        <CameraItem
          key={camera.id}
          {...camera}
        />
      )
    )}
  </div>
);

CameraList.defaultProps = {};
CameraList.propTypes = {
  cameras:     PropTypes.array,
  likeFunc:    PropTypes.func,
  dislikeFunc: PropTypes.func
};

export default CameraList;
