const { DOM, PropTypes } = React;

attrs = { src:    'http://fishki.net/picsw/092011/20/bonus/foto/049.jpg',
    height: '230',
    width:  '150',
    alt:    'qwerty' };

const Image = props => DOM.img(props);
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
    alt:    PropTypes.string};

ReactDOM.render(
    React.createElement('div', {},
        React.createElement(Image, attrs),
        React.createElement(Image)),
    document.getElementById('app')
);
