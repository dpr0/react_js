import React     from 'react';
import PropTypes from 'prop-types';
import { List }  from 'semantic-ui-react';

const TextBox = ({meta, body}) => (
  <div>
    <List>
      <List.Item>
        <List.Content>
          <List.Description>{body}</List.Description>
        </List.Content>
      </List.Item>
    </List>
    <List size="mini">
      <List.Item style={meta.author    ? {} : {display: 'none'}}>
        <List.Icon name='users' />
        <List.Content>{meta.author}</List.Content>
      </List.Item>
      <List.Item style={meta.createdAt ? {} : {display: 'none'}}>
        <List.Icon name='marker' />
        <List.Content>{meta.createdAt}</List.Content>
      </List.Item>
      <List.Item style={meta.updatedAt ? {} : {display: 'none'}}>
        <List.Icon name='linkify' />
        <List.Content>{meta.updatedAt}</List.Content>
      </List.Item>
    </List>
  </div>
);
TextBox.defaultProps = {body: 'empty', meta: {author: 'nobody', createdAt: 'no date'}};
TextBox.propTypes = {
  meta: PropTypes.shape({
    author:    PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string
  }),
  body: PropTypes.string};

export default TextBox;
