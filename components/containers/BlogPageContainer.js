import React from 'react';
import BlogList from '../ui/BlogList';
import { bind, cloneDeep } from 'lodash/function';
import { PieChart, PieChartLikes } from '../ui/PieChart';

class BlogPageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: props.posts };
        this.likeFunc = bind(this.likeFunc, this);
        this.dislikeFunc = bind(this.dislikeFunc, this);
    }

    likeFunc(id) {
        let cloned_posts = cloneDeep(this.state.posts);
        _.each(cloned_posts, (post) => {
            if (post.id == id) {
                post.like == undefined ? (post.like=1) : (post.like+=1);
                this.setState({ posts: cloned_posts });}
        })
    }

    dislikeFunc(id) {
        let cloned_posts = cloneDeep(this.state.posts);
        _.each(cloned_posts, (post) => {
            if (post.id == id) {
                post.dislike == undefined ? (post.dislike=1) : (post.dislike+=1);
                this.setState({ posts: cloned_posts });}
        })
    }

    render() {
        return (
            <div>
                <PieChart posts={this.state.posts} />
                <PieChartLikes postsLikes={
                    map(this.state.posts,
                        function(post){ return [post.id, post.like] }
                    )
                }
                />
                <BlogList
                    posts={this.state.posts}
                    likeFunc={this.likeFunc}
                    dislikeFunc={this.dislikeFunc}
                />
            </div>
        )
    }
}

export default BlogPageContainer;

