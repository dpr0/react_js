const { DOM, PropTypes } = React;
const { bind, assign, map }   = _;
moment.locale('ru');
const Image = ({ src, height, width, alt }) => DOM.img({ src, height, width, alt });
Image.defaultProps = {src: 'http://stormweb.pro/images/cms/data/raznoe/error_404.jpg', height: '168', width: '206', alt: '404'};
Image.propTypes = {src: PropTypes.string, height: PropTypes.string, width: PropTypes.string, alt: PropTypes.string};

const TextBox = ({meta, text}) => (
    <div>
        <h3>{text}</h3>
        <ul>
            <li><b>author:   </b> {meta.author}   </li>
            <li><b>createdAt:</b> {meta.createdAt}</li>
            <li><b>updatedAt:</b> {meta.updatedAt}</li>
        </ul>
    </div>
);
TextBox.defaultProps = {text: 'empty'};
TextBox.propTypes = {meta: {author: PropTypes.string}, dislike: PropTypes.string};

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.state        = { like: props.like, dislike: props.dislike };
        this.likeClick    = bind(this.likeClick,    this);
        this.dislikeClick = bind(this.dislikeClick, this);
    }

    likeClick()    { this.setState({ like:    this.state.like    + 1 }) }
    dislikeClick() { this.setState({ dislike: this.state.dislike + 1 }) }

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

class BlogItem extends React.Component {
    render() {
        console.log(this.props);
        const { like, dislike, text, image, meta } = this.props;
        return (
            <div>
                <TextBox text={text} meta={{...meta}}/>
                <Like like={like} dislike={dislike} />
                <Image {...image} />
            </div>

        )
    }
}
const BlogList = ({children}) => (
    <div>
        {
            map(
                children,
                (child, key) => (
                    <div key={key}>
                        {child}
                    </div>
                )
            )
        }
    </div>
);

class BlogPage extends React.Component {
    render() {
        return (
            <BlogList>
                {[
                    <BlogItem
                        meta       = {{
                            author:    'nobody',
                            createdAt: moment('10-01-2017 10:00:00').format('DD.MM.YYYY, dddd, h:mm:ss'),
                            updatedAt: moment().format('DD.MM.YYYY, dddd, h:mm:ss')
                        }}
                    />,
                    <BlogItem
                        like       = {20}
                        text       = 'Пост #1'
                        image      = {{
                            src:    'http://fishki.net/picsw/092011/20/bonus/foto/049.jpg',
                            height: '230',
                            width:  '150',
                            alt:    'qwerty'
                        }}
                        meta       = {{
                            author:   'dpro',
                            createdAt: moment('09-31-2017 11:11:11').format('DD.MM.YYYY, dddd, h:mm:ss'),
                            updatedAt: moment().format('DD.MM.YYYY, dddd, h:mm:ss')
                        }}
                    />
                ]}
            </BlogList>
        )
    }
}

ReactDOM.render(
    React.createElement('div', {}, React.createElement(BlogPage)),
    document.getElementById('app')
);