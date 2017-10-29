const { DOM, PropTypes } = React;

const TextBox = ({text}) => DOM.span( {}, text );
TextBox.defaultProps = {text: 'null'};
TextBox.propTypes = {text: PropTypes.string};

ReactDOM.render(
    React.createElement(TextBox),
    document.getElementById('app')
);
