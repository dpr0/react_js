import React     from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, height, width, alt }) => (
  <div>
    <img
      src={src}
      height={height}
      width={width}
      alt={alt}
    />
  </div>
);

Image.defaultProps = {
  src:    'http://stormweb.pro/images/cms/data/raznoe/error_404.jpg',
  height: '168',
  width:  '206',
  alt:    '404'
};
Image.propTypes = {
  src:    PropTypes.string,
  height: PropTypes.string,
  width:  PropTypes.string,
  alt:    PropTypes.string
};

export default Image;
