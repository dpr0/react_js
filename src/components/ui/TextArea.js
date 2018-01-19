import React from 'react';

class Text extends React.Component {
  render() {
    const { label, name, fieldRef } = this.props;
    return (
      <div className="ui field">
        <label htmlFor={name}>{label}</label>
        <textarea
          className="ui input"
          id={name}
          name={name}
          ref={fieldRef}
        />
      </div>
    );
  }
}

export default Text;
