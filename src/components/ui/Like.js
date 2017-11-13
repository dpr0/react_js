const Like = ({ like, dislike, likeFunc, dislikeFunc }) => (
  <div>
    Нравится: {like}
    <button onClick={likeFunc}>LIKE!</button>
    Не нравится: {dislike}
    <button onClick={dislikeFunc}>DISLIKE!</button>
  </div>
);
Like.defaultProps = {};
Like.propTypes = {};

export default Like;
