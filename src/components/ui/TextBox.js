import React     from 'react';
import PropTypes from 'prop-types';

const TextBox = ({meta, title, body}) => (
  <div>
    <h1>{title}</h1>
    <h3>{body}</h3>
    <ul>
      <li style={meta.author    ? {} : {display: 'none'}}><b>author:   </b> {meta.author}   </li>
      <li style={meta.createdAt ? {} : {display: 'none'}}><b>createdAt:</b> {meta.createdAt}</li>
      <li style={meta.updatedAt ? {} : {display: 'none'}}><b>updatedAt:</b> {meta.updatedAt}</li>
    </ul>
  </div>
);
TextBox.defaultProps = {title: 'empty', body: 'empty', meta: {author: 'nobody', createdAt: 'no date'}};
TextBox.propTypes = {
  id: PropTypes.number,
  meta: PropTypes.shape({
    author:    PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string
  }),
  title: PropTypes.string,
  body: PropTypes.string};

export default TextBox;
