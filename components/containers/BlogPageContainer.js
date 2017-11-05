import React        from 'react';
import BlogList     from '../ui/BlogList';
import formatedDate from '../../helpers/dateHelper';

let posts = [
    {
        like: 20,
        text: 'Пост #1',
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
    },
    {
        like: 1,
        text: 'Пост #3',
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

class BlogPageContainer extends React.Component {
    render() {
        return (<BlogList {...posts}/>)
    }
}

export default BlogPageContainer;

