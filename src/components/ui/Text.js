import React from 'react';
import classNames from 'classnames';

const Text = ({ name, value, onChange, label, error }) => (
  <div className={classNames('ui field', { error })}>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      type="text"
      className="ui input"
      value={value}
      onChange={ onChange }
    />
  </div>
);

export default Text;
