const { DOM, PropTypes } = React;
const { bind, assign } = _;
const Segment = ({ color, children }) => (
  <div style={{ border: `1px solid ${color}` }}>
    {children}
  </div>
);
Segment.defaultProps = {
  color: 'red',
  children: 'Hello, Earth!'
};
Segment.propTypes = {
  color: PropTypes.oneOf([ 'red', 'blue' ]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ])
};

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count };
    this.handleClick = bind(this.handleClick, this);
  }

  handleClick(e) {
    const step = e.shiftKey ? 10 : 1;
    this.setState({ count: this.state.count + step });
  }

  render() {
    return(
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}
Counter.defaultProps = {
  count: 0
};
Counter.propTypes = {
  count: PropTypes.number
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fields: {firstName: '', lastName: ''} };
  }

  setField(e, name) {
    this.setState({ fields: assign({}, this.state.fields, {[name]: e.target.value}) });
  }

  render() {
    return(
      <div>
        <label for='firstName'>Имя</label><br />
        <input type='text'
             id='firstName'
             name='firstName'
             value={this.state.fields.firstName}
             onChange={(e) => this.setField(e, 'firstName')} /><br />
        <label for='lastName'>Фамилия</label><br />
        <input type='text'
             id='lastName'
             name='lastName'
             value={this.state.fields.lastName}
             onChange={(e) => this.setField(e, 'lastName')}/><br />
        <button onClick = {() => console.log(this.state.fields)}>Отправить</button>
      </div>
    )
  }
}
Form.defaultProps = {
};
Form.propTypes = {
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentEvent: '---' };
    this.update = bind(this.update, this);
  }

  update(e) {
    this.setState({ currentEvent: e.type });
  }

  render() {
    return (
      <div>
    <textarea
      cols="30"
      rows="10"
      onFocus={this.update}
      onBlur={this.update}
      onCut={this.update}
      onPaste={this.update}
      onCopy={this.update}
      onTouchStart={this.update}
      onTouchEnd={this.update}
      onTouchMove={this.update}
    />
        <h1>{this.state.currentEvent}</h1>
      </div>
    );
  }
}

ReactDOM.render(
  (
    <Segment>
      <App />
      <Form />
      <Counter count={10} />
    </Segment>
  ),
  document.getElementById('app')
);
