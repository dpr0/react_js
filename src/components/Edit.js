import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import classNames from 'classnames';
import { updatePost } from 'actions/UpdatePost';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={classNames('ui field', { error }) }>
    <label>{label}</label>
    <input className='ui input' {...input} type={type}  />
    {
      touched && (error && ( <div className="ui red label">{ error }</div>)
        ||
      warning && ( <div className="ui yellow label">{ warning }</div>))
    }
  </div>
);

const warn = (values) => {
  const warnings = {};
  if (!values.title || values.title.length < 4) warnings.title = 'Min 4 literals';
  return warnings;
};

const validate = (values) => {
  const errors = {};
  const requiredFields = ['title', 'author'];
  requiredFields.forEach(field => { if (!values[field]) errors[field] = 'Required' });
  return errors;
};

const EditPostView = ({ handleSubmit, pristine, submitting, reset, updPost }) => (
  <div>
    <h1>Edit Post</h1>
    <form className="ui form" onSubmit={ handleSubmit }>
      <Field component={renderField} name="title"     type="text"   label="Title" />
      <Field component={renderField} name="createdAt" type="text"   label="Created at" />
      <Field component={renderField} name="author"    type="text"   label="Author" />
      <input className="ui button primary" type="submit" value="Update" onClick={updPost(this.state.post.entry)} />
      { (!pristine && !submitting) &&
        <button className="ui button" onClick={reset}>Clear</button>
      }
    </form>
  </div>
);

const sleep = (values) => {
  return sleep(1000).then(() => {
    if (true) {
      throw new SubmissionError({ title: 'unknown error'});
    } else {
      console.log(JSON.stringify(values));
    }
  });
};

const submit = (values) => {
  console.log(JSON.stringify('======================='));
  console.log(JSON.stringify(values));
  new Promise(resolve => setTimeout(resolve, 5));
};

export default connect(
  (state) => ({
    initialValues: {
      title:     state.post.entry && state.post.entry.message,
      author:    state.post.entry && state.post.entry.meta.author,
      createdAt: state.post.entry && state.post.entry.meta.createdAt,
    }
  }),
  (dispatch) => ({
    updPost: (id, post) => (dispatch(updatePost(id, post)))
  })
)(reduxForm({
  form: 'editPost',
  validate,
  warn,
  onSubmit: submit
})(EditPostView));
