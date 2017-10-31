const { DOM, PropTypes } = React;
const { bind } = _;
const Img = props => DOM.img(props);
Img.defaultProps = {
    src:    'http://stormweb.pro/images/cms/data/raznoe/error_404.jpg',
    height: '168',
    width:  '206',
    alt:    '404'};
Img.propTypes = {
    src:    PropTypes.string,
    height: PropTypes.number,
    width:  PropTypes.number,
    alt:    PropTypes.string};

class Draggable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { left: props.left, top: props.top, move: false };
     // this.mouseDrag      = bind(this.mouseDrag,      this);
     // this.mouseDragStart = bind(this.mouseDragStart, this);
     // this.mouseDragEnd   = bind(this.mouseDragEnd,   this);
        this.mouseClick     = bind(this.mouseClick,     this);
        this.mouseMove      = bind(this.mouseMove,      this);
        this.mouseDown      = bind(this.mouseDown,      this);
        this.mouseUp        = bind(this.mouseUp,        this);
    }

    mouseDown(e) {
        this.setState({move: true,  x: e.screenX, y: e.screenY, event: e.type});
        e.preventDefault();
    }
    mouseUp(e) {
        this.setState({move: false, x: e.screenX, y: e.screenY, event: e.type});
        e.preventDefault();
    }
    mouseClick(e) {
        var move = this.state.move ? false : true;
        this.setState({move: move,  x: e.screenX, y: e.screenY, event: e.type});
    }
    mouseMove(e) {
        if (this.state.move) {
            this.setState({
                left: this.state.left + e.screenX - this.state.x,
                top:  this.state.top  + e.screenY - this.state.y,
                x: e.screenX,
                y: e.screenY,
                event: e.type
            });
        }

    }

    // mouseDragStart(e) {
    //  this.setState({
    //    x: this.state.left,
    //    y: this.state.top
    //  })
    // }
    // mouseDrag(e) {
    //  this.setState({ x: e.screenX, y: e.screenY  })
    // }
    // mouseDragEnd(e) {
    //  this.setState({
    //    left: e.screenX - this.state.x,
    //    top:  e.screenY - this.state.y - this.props.height,
    //  });
    // }

    render() {
        return (
            <div
                style={{ left: this.state.left, top: this.state.top, position: 'absolute' }}
                onMouseMove ={this.mouseMove}
                onMouseDown ={this.mouseDown}
                onMouseUp   ={this.mouseUp}
                //  onClick     ={this.mouseClick}
                //  onDragStart ={this.mouseDragStart}
                //  onDrag      ={this.mouseDrag}
                //  onDragEnd   ={this.mouseDragEnd}
            >
                <div>left:  {this.state.left}, top: {this.state.top} </div>
                <div>x:     {this.state.x},    y:   {this.state.y}   </div>
                <div>event: {this.state.event}                       </div>
                <Img height={250} width={180}
                     src='http://fishki.net/picsw/092011/20/bonus/foto/049.jpg'
                />
            </div>
        );
    }
}
Draggable.defaultProps = { left: 70, top: 70 };
Img.propTypes = {
    left: PropTypes.number,
    top:  PropTypes.number};

ReactDOM.render(
    (
        <Draggable />
    ),
    document.getElementById('app')
);
