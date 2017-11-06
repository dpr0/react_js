import React     from 'react';

const Like = ({ like, dislike, likeFunc, dislikeFunc }) => {
    return(
        <div>
            <p>
                <button onClick={likeFunc}>LIKE!</button>
                Нравится: {like}
            </p>
            <p>
                <button onClick={dislikeFunc}>DISLIKE!</button>
                Нравится: {dislike}
            </p>
        </div>
    )
};

export default Like;
