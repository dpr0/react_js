import React        from 'react';
import BlogList     from '../ui/BlogList';
import formatedDate from '../../helpers/dateHelper';
import { bind }     from 'lodash/function';

let posts = [
    {
        id: 1,
        like: 20,
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

class BlogPageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: props.posts };
        this.likeFunc = bind(this.likeFunc, this);
        this.dislikeFunc = bind(this.dislikeFunc, this);
    }

    likeFunc(id) { _.each(posts, (post) => {
        if (post.id == id) {
            post.like == undefined ? (post.like=1) : (post.like+=1);
            this.setState({ posts });}
    }) }

    dislikeFunc(id) { _.each(posts, (post) => {
        if (post.id == id) {
            post.dislike == undefined ? (post.dislike=1) : (post.dislike+=1);
            this.setState({ posts });}
    }) }

    render() {
        return (<BlogList posts={posts} likeFunc={this.likeFunc} dislikeFunc={this.dislikeFunc} />)
    }
}

export default BlogPageContainer;

