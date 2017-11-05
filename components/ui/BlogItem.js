import React   from 'react';
import Like    from '../ui/Like';
import Image   from '../ui/Image';
import TextBox from '../ui/TextBox';

class BlogItem extends React.Component {
    render() {
        const { like, dislike, text, image, meta } = this.props;
        return (
            <div>
                <TextBox text={text} meta={meta} />
                <Like like={like} dislike={dislike} />
                <Image {...image} />
            </div>

        )
    }
}

export default BlogItem;
