import React from 'react';

class TextArea extends React.Component {
  render() {
    const { name, value, onChange, label } = this.props;
    return (
      <div className='ui field'>
        <label htmlFor={name}>{label}</label>
        <textarea
          id={name}
          name={name}
          className="ui input"
          value={value}
          onChange={ onChange }
        />
      </div>
    );
  }
}

export default TextArea;
