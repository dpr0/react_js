const DOM = React.DOM;

attrs = { src:    'http://fishki.net/picsw/092011/20/bonus/foto/049.jpg',
          height: '230',
          width:  '150',
          alt:    'qwerty' };

const Image = (props) => (
    DOM.img(props)
);

const TextBox = ({text}) => (
    DOM.h3( {}, text )
);

const BlogItem = ({img, text}) => (
    DOM.div( {}, React.createElement(TextBox, {text}), React.createElement(Image, img))
);

class BlogList extends React.Component {
    render() {
        return React.createElement('div', {},
            React.createElement(BlogItem, {img: attrs, text: '123123'})
        )
    }
};

ReactDOM.render(
    React.createElement('div', {},
        React.createElement(BlogList),
        React.createElement(BlogList),
        React.createElement(BlogList)),
    document.getElementById('app')
);