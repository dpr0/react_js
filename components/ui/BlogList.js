import React    from 'react';
import BlogItem from '../ui/BlogItem';
import _        from 'lodash';
const { map }   = _;

const BlogList = ({ posts, likeFunc, dislikeFunc }) => {
    return(
        <div className='bloglist'>
            {
                map(posts, (hash) => (
                        <BlogItem
                            key={hash.id}
                            {...hash}
                            likeFunc={likeFunc}
                            dislikeFunc={dislikeFunc}
                        />
                    )
                )
            }
        </div>
    )
};

export default BlogList;
