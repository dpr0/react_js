import React from 'react';
import { assign, mapValues } from 'lodash/object';
import Text from 'components/ui/Text';
import TextArea from 'components/ui/TextArea';

class Contacts extends React.Component {

  constructor(props) {
    super(props);
    this.state = { errors: {} };
    this.form = {};
    this.onSubmit = this.onSubmit.bind(this);
    this.generateRef = this.generateRef.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {} });
    const values = mapValues(this.form, 'value');

    if (!values.email || values.email.length < 3) {
      this.setState(assign(
        {},
        this.state,
        { errors: assign(this.state.errors, { email: true })}
      ));
    }

    console.log(JSON.stringify(values));
  }

  generateRef(fieldName) {
    return (input) => { this.form[fieldName] = input; };
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <form className="ui form" onSubmit={this.onSubmit} >
          <Text
            label="Full name"
            name="fullName"
            fieldRef={ this.generateRef('fullName') }
          />
          <Text
            label="Email"
            name="email"
            error={this.state.errors.email}
            fieldRef={ this.generateRef('email') }
          />
          <TextArea
            label="Message"
            name="message"
            fieldRef={ this.generateRef('message') }
          />
          <input
            className="ui button primary"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default Contacts;