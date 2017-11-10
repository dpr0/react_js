import React     from 'react';

const Like = ({ like, dislike, likeFunc, dislikeFunc }) => {
    return(
        <div>
            Нравится: {like}
            <button onClick={likeFunc}>LIKE!</button>
            Не нравится: {dislike}
            <button onClick={dislikeFunc}>DISLIKE!</button>
        </div>
    )
};

export default Like;
