const { DOM, PropTypes } = React;
const { assign } = _;

img_attrs = { src:    'http://fishki.net/picsw/092011/20/bonus/foto/049.jpg',
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

const TextBox = ({text}) => DOM.h3( {}, text );
TextBox.defaultProps = {text: 'null'};
TextBox.propTypes = {text: PropTypes.string};

const BlogItem = ({img, text}) => (
    DOM.div( {},
        React.createElement(TextBox, {text}),
        React.createElement(Image, img))
);
BlogItem.defaultProps = {text: 'default_text'};
BlogItem.propTypes = {img: PropTypes.object, text: PropTypes.string};

class BlogList extends React.Component {
    render() {
        return React.createElement('div', {},
            React.createElement(BlogItem, {img: img_attrs, text: '123123'}),
            React.createElement(BlogItem),
        )
    }
};

ReactDOM.render(
    React.createElement('div', {},
        React.createElement(BlogList),
        React.createElement(BlogList)),
    document.getElementById('app')
);