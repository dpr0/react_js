import PropTypes from 'prop-types';
import DOM       from 'react-dom';

const Image = ({ src, height, width, alt }) => DOM.img({ src, height, width, alt });
Image.defaultProps = {
  src: 'http://stormweb.pro/images/cms/data/raznoe/error_404.jpg',
  height: '168',
  width: '206',
  alt: '404'
};
Image.propTypes = {src: PropTypes.string, height: PropTypes.string, width: PropTypes.string, alt: PropTypes.string};

export default Image;
