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

class BlogItem extends React.Component {
    render() {
        return React.createElement('div', {},
               React.createElement(TextBox, {text: '123123'}),
               React.createElement(Image, attrs))
    }
};

ReactDOM.render(
    React.createElement('div', {},
        React.createElement(BlogItem),
        React.createElement(BlogItem),
        React.createElement(BlogItem)),
    document.getElementById('app')
);