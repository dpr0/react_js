import React    from 'react';
import BlogItem from '../ui/BlogItem';
import _        from 'lodash';
const { map }   = _;

class BlogList extends React.Component {
    render() {
        return(
            <div className='bloglist'>
                {
                    map(this.props,
                        (hash, key) => (<BlogItem key={key} {...hash} />)
                    )
                }
            </div>
        )
    }
}

export default BlogList;
