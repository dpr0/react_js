import React     from 'react';
import PropTypes from 'prop-types';
import { bind }  from 'lodash/function';

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.state        = { like: props.like, dislike: props.dislike };
        this.likeClick    = bind(this.likeClick,    this);
        this.dislikeClick = bind(this.dislikeClick, this);
    }

    likeClick(e)    {
        console.log(e);
        this.setState({ like:    this.state.like    + 1 });
    }
    dislikeClick() {
        this.setState({ dislike: this.state.dislike + 1 })
    }

    render() {
        return(
            <div>
                <p>
                    <button onClick={this.likeClick}>LIKE!</button>
                    Нравится: {this.state.like}
                </p>
                <p>
                    <button onClick={this.dislikeClick}>DISLIKE!</button>
                    Не нравится: {this.state.dislike}
                </p>
            </div>
        )
    }
}
Like.defaultProps = {like: 0, dislike: 0};
Like.propTypes = {like: PropTypes.number, dislike: PropTypes.number};

export default Like;
