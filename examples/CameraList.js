import React      from 'react';
import CameraItem from '../ui/CameraItem';
import { map }    from 'lodash';
import PropTypes  from 'prop-types';

const CameraList = ({ cameras }) => (
  <div className='bloglist'>
    {map(cameras,
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
