const { DOM, PropTypes } = React;
const { bind, assign }   = _;
const Image = props => DOM.img(props);
moment.locale('ru');

const TextBox = ({author, created_at, updated_at, text}) => (
    <div>
        <h3>{text}</h3>
        <ul>
            <li><b>author:    </b> {author}    </li>
            <li><b>created_at:</b> {created_at}</li>
            <li><b>updated_at:</b> {updated_at}</li>
        </ul>
    </div>
);
TextBox.defaultProps = {author: 'anonimus', text: 'empty'};
TextBox.propTypes = {author: PropTypes.string, dislike: PropTypes.string};


class Like extends React.Component {
    constructor(props) {
        super(props);
        this.state = { like: props.like, dislike: props.dislike };
        this.likeClick = bind(this.likeClick, this);
        this.dislikeClick = bind(this.dislikeClick, this);
    }

    likeClick() {
        this.setState({ like: this.state.like + 1 });
    }
    dislikeClick() {
        this.setState({ dislike: this.state.dislike + 1 });
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

class BlogItem extends React.Component {
    constructor(props) {
        super(props);
        this.meta = {
            author:     'dpro',
            created_at: moment('09-31-2017 11:11:11').format('DD.MM.YYYY, dddd, h:mm:ss'),
            updated_at: moment().format('DD.MM.YYYY, dddd, h:mm:ss'),
            like:       11,
            dislike:    null, // значение не передано
            text:       '123123',
            image: {
                src:    'http://fishki.net/picsw/092011/20/bonus/foto/049.jpg',
                height: '230',
                width:  '150',
                alt:    'qwerty'
            }
        }
    }

    render() {
        return React.createElement('div', {},
            React.createElement(TextBox, this.meta),
            React.createElement(Like,    this.meta),
            React.createElement(Image,   this.meta.image))
    }
};

ReactDOM.render(
    React.createElement('div', {},
        React.createElement(BlogItem),
        React.createElement(BlogItem),
        React.createElement(BlogItem)),
    document.getElementById('app')
);