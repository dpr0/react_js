const DOM = React.DOM;

class Image extends React.Component {
    render() {
        return React.createElement('img',
            {
                src:    'http://fishki.net/picsw/092011/20/bonus/foto/049.jpg',
                height: '230',
                width:  '150',
                alt:    'qwerty'
            }
        )
    }
};

class TextBox extends React.Component{
    render() {
        return DOM.h3({}, 'hello)')
    }
}

class BlogItem extends React.Component {
    render() {
        return React.createElement('div', {},
            React.createElement(TextBox, {}),
            React.createElement(Image, {}))
    }
};

ReactDOM.render(
    React.createElement('div', {},
        React.createElement(BlogItem),
        React.createElement(BlogItem),
        React.createElement(BlogItem)),
    document.getElementById('app')
);