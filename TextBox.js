const DOM = React.DOM;

const TextBox = ({text}) => (
    DOM.span( {}, text )
);

ReactDOM.render(
    React.createElement(TextBox, {text: '123123'}),
    document.getElementById('app')
);
