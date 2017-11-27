import { map } from 'lodash';

export default function formatedColumns(props) {
  return [
    ['Likes'   ].concat(map(props.posts, function(item) { return item.like; })),
    ['Dislikes'].concat(map(props.posts, function(item) { return item.dislike; })),
  ];
}