import React from 'react';
import classNames from 'classnames';

class Text extends React.Component {
  render() {
    const { label, name, fieldRef, error } = this.props;
    return (
      <div className={ classNames('ui field', { error }) }>
        <label htmlFor={name}>{label}</label>
        <input
          type="text"
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
