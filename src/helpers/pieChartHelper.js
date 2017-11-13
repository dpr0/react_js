import _ from 'lodash';

export default function formatedColumns(props) {
  return [
    ['Likes'   ].concat(_.map(props.posts, function(item) { return item.like; })),
    ['Dislikes'].concat(_.map(props.posts, function(item) { return item.dislike; })),
  ];
}