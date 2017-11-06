import React             from 'react';
import ReactDOMServer    from 'react-dom/server';
import BlogPageContainer from './components/containers/BlogPageContainer'

const result = ReactDOMServer.renderToString(
    React.createElement(BlogPageContainer)
);

export default (result);
