import React             from 'react';
import ReactDOMServer    from 'react-dom/server';
import BlogPageContainer from './components/containers/BlogPageContainer'
import formatedDate      from 'helpers/dateHelper';

let posts = [
    {
        id: 1,
        like: 20,
        dislike: 0,
        title: 'Пост #1',
        body: 'hello world',
        image: {
            src: 'http://fishki.net/picsw/092011/20/bonus/foto/049.jpg',
            height: '230',
            width: '150',
            alt: 'qwerty'
        },
        meta: {
            author: 'dpro',
            createdAt: formatedDate('31-10-2017 11:11:11'),
            updatedAt: formatedDate('01-11-2017 11:11:11'),
        }
    },
    {
        id: 2,
        like: 7,
        dislike: 10
    },
    {
        id: 3,
        like: 1,
        dislike: 1,
        title: 'Пост #3',
        body: 'hello world',
        image: {
            src: 'http://fishki.net/picsw/092011/20/bonus/foto/049.jpg',
            height: '230',
            width: '150',
            alt: 'qwerty'
        },
        meta: {
            author: 'dpro',
            createdAt: formatedDate('03-10-2017 11:11:11'),
            updatedAt: formatedDate('04-10-2017 11:11:11'),
        }
    }
];

const result = ReactDOMServer.renderToString(
    React.createElement(BlogPageContainer, {posts: posts})
);

export default (result);
