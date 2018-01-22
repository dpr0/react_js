import React from 'react';
import { set, assign } from 'lodash/object';
import Text from 'components/ui/Text';
import TextArea from 'components/ui/TextArea';

class Contacts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        values: {
          fullName: '',
          email: '',
          message: ''
        },
        errors: {}
      }
    };
    this.onSubmit    = this.onSubmit.bind(this);
    this.changeField = this.changeField.bind(this);
    this.clearError  = this.clearError.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify(this.state.form.values));
  }

  clearError(fieldName) {
    this.setState(
      set(
        assign({}, this.state),
        ['form', 'errors', fieldName],
        false
      )
    );
  }

  changeField(fieldName) {
    return (e) => {
      switch(fieldName) {
        case 'email':
          this.clearError('email');
          if (e.target.value.length < 3)
            this.setState(set(
              assign({}, this.state),
              'form.errors.email',
              true
            ));
          break;
      }

      this.setState(
        set(
          assign({}, this.state),
          ['form', 'values', fieldName],
          e.target.value
        )
      );
    };
  }

  render() {
    const { fullName, email, message } = this.state.form.values;
    return (
      <div>
        <h1>Contacts</h1>
        <form className="ui form" onSubmit={this.onSubmit}>
          <Text
            name='fullName'
            label='Full name'
            value={fullName}
            onChange={ this.changeField('fullName') }
          />
          <Text
            name='email'
            label='Email'
            value={email}
            error={this.state.form.errors.email}
            onChange={ this.changeField('email') }
          />
          <TextArea
            name='message'
            label='Message'
            value={message}
            error={this.state.form.errors.email}
            onChange={ this.changeField('message') }
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