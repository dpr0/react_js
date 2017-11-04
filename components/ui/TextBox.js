import React     from 'react';
import PropTypes from 'prop-types';

const TextBox = ({meta, text}) => (
    <div>
        <h3>{text}</h3>
        <ul>
            <li style={meta.author    ? {} : {display: 'none'}}><b>author:   </b> {meta.author}   </li>
            <li style={meta.createdAt ? {} : {display: 'none'}}><b>createdAt:</b> {meta.createdAt}</li>
            <li style={meta.updatedAt ? {} : {display: 'none'}}><b>updatedAt:</b> {meta.updatedAt}</li>
        </ul>
    </div>
);
TextBox.defaultProps = {text: 'empty', meta: {author: 'nobody', createdAt: 'no date'}};
TextBox.propTypes = {
    meta: PropTypes.shape({
        author:    PropTypes.string,
        createdAt: PropTypes.string,
        updatedAt: PropTypes.string
    }),
    text: PropTypes.string};

export default TextBox;
