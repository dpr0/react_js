const DOM = React.DOM;

const text = [{ body: '12345 54321'},
              { body: '09876 67890'}];

class TextBoxContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text };
    }
    render() {
        const { text } = this.state;
        return React.createElement(TextBox, { text })
    }
}

const TextBox = ({ text }) => (
    DOM.span(
        {},
        _.map(
            text,
            (value, key) => (
                DOM.h3({ key }, `${value.body}`)
            )
        )
    )
);

ReactDOM.render(
    React.createElement(TextBoxContainer),
    document.getElementById('app')
);