const DOM = React.DOM;

attrs = { src:    'http://fishki.net/picsw/092011/20/bonus/foto/049.jpg',
          height: '230',
          width:  '150',
          alt:    'qwerty' };

const Image = (props) => (
    DOM.img(props)
);

ReactDOM.render(
    React.createElement(Image, attrs),
    document.getElementById('app')
);