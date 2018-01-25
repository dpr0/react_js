import MainLayout        from 'components/layouts/MainLayout';
import initialLoad       from 'helpers/initialLoad';
import AboutContainer    from 'containers/AboutContainer';
import { fetchPosts }    from 'actions/Posts';
import { fetchPost }     from 'actions/Post';
import { postPath, rootPath, aboutPath, pieChartPath, contactsPath, editPostPath } from 'helpers/routes';
import PostsContainer    from 'containers/PostsContainer';
import PostContainer     from 'containers/PostContainer';
import PieChartContainer from 'containers/PieChartContainer';
import EditPostView      from 'components/Edit';
import Contacts          from 'components/ui/Contacts';

const Index = {
  path: rootPath(),
  component: PostsContainer,
  prepareData: (store) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPosts());
  }
};

const PieChartRoute = {
  path: pieChartPath(),
  component: PieChartContainer,
  prepareData: (store) => { return store.dispatch(fetchPosts()); }
};

const PostRoute = {
  path: postPath(),
  component: PostContainer,
  prepareData: (store, query, params) => { return store.dispatch(fetchPost(params.id)); }
};

const EditPostRoute = {
  path: editPostPath(),
  component: EditPostView,
  prepareData: (store, query, params) => { return store.dispatch(fetchPost(params.id)); }
};

const About = {
  path: aboutPath(),
  component: AboutContainer
};

const ContactsRoute = {
  path: contactsPath(),
  component: Contacts
};

export default {
  component: MainLayout,
  childRoutes: [ Index, PostRoute, About, PieChartRoute, ContactsRoute, EditPostRoute ]
};
