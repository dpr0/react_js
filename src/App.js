import React from 'react';
import BlogPageContainer from './components/containers/BlogPageContainer';
import { posts as staticPosts } from 'constants/static/posts';

const App = () => (
  <BlogPageContainer {...staticPosts} />
);

export default App;
