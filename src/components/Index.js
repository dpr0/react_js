import React from 'react';
import Helmet from 'react-helmet';
import BlogList from 'components/ui/BlogList';
import PropTypes from 'prop-types';

const Index = ({ items, likeFunc, pageClick }) => (
  <div>
    <BlogList items={items} likeFunc={likeFunc} pageClick={pageClick} />
    <Helmet title='Список постов' />
  </div>
);

Index.propTypes = {
  items: BlogList.propTypes.items,
  likeFunc: PropTypes.func,
  pageClick: PropTypes.func
};

export default Index;
