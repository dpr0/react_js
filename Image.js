const DOM = React.DOM;

class ImageContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(Image, {})
    }
}

const Image = ( props ) => (
    DOM.img(
        {
            src:    'http://fishki.net/picsw/092011/20/bonus/foto/049.jpg',
            height: '230',
            width:  '150',
            alt:    'qwerty'
        },
        props.children
    )
);

ReactDOM.render(
    React.createElement(ImageContainer),
    document.getElementById('app')
);