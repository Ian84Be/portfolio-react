import React from 'react';
import debounce from '../../utils/debounce';
import projectImage from './WoolyWilly.jpg';
import '../../scss/ToyBox/WoolyWilly.scss';

class WoolyWilly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImg: projectImage,
      activeDoodle: false,
      isDrawing: false,
      hidden: false,
      hue: 0,
      lastX: 0,
      lastY: 0
    };
    this.canvas = React.createRef();
    this.projectImage = React.createRef();
    this.ctx = null;
    window.addEventListener('resize', this.stretchCanvas);
  }
  render() {
    return (
      <div className={`WoolyWilly ${this.props.lightMode ? 'lightMode' : ''}`}>
        <section className="WoolyWilly__body">
          <img src={projectImage} alt="projectImage" ref={this.projectImage} />
          <canvas
            onDoubleClick={() => console.log('onDoubleClick()')}
            onMouseMove={this.draw}
            onMouseDown={e => {
              this.setState({
                ...this.state,
                isDrawing: true,
                lastX: e.offsetX,
                lastY: e.offsetY
              });
            }}
            onMouseUp={() => this.setState({ ...this.state, isDrawing: false })}
            onMouseOut={() =>
              this.setState({ ...this.state, isDrawing: false })
            }
            id="draw"
            ref={this.canvas}
            style={this.state.hidden ? { display: 'none' } : null}
          ></canvas>

          <div className="controls">
            <span
              aria-label="crayon"
              className="crayon"
              role="button"
              onClick={() => this.changeBrush('crayon')}
            >
              🖍
            </span>
            <span
              aria-label="pen"
              className="pen"
              role="button"
              onClick={() => this.changeBrush('pen')}
            >
              🖊
            </span>
          </div>
        </section>
      </div>
    );
  }

  componentDidMount() {
    this.stretchCanvas();
    this.changeBrush('crayon');
  }

  changeBrush = brush => {
    console.log(brush);
    this.ctx = this.canvas.current.getContext('2d');
    if (brush === 'crayon') {
      this.ctx.strokeStyle = `hsl(0, 100%, 50%)`;
      this.ctx.lineJoin = 'round';
      this.ctx.lineCap = 'round';
      this.ctx.lineWidth = 4.0;
      this.ctx.globalAlpha = 1;
    }
    if (brush === 'pen') {
      this.ctx.strokeStyle = `hsl(260, 38%, 3%)`;
      this.ctx.lineJoin = 'round';
      this.ctx.lineCap = 'round';
      this.ctx.lineWidth = 1.0;
      this.ctx.globalAlpha = 1;
    }
  };

  stretchCanvas = e => {
    const canvas = this.canvas.current;
    const projectImage = this.projectImage.current;
    const rect = projectImage.getBoundingClientRect();
    canvas.style.position = 'absolute';
    canvas.style.top = `${rect.y}px`;
    canvas.width = projectImage.naturalWidth;
    canvas.height = projectImage.naturalHeight;
  };

  draw = e => {
    const { lastX, lastY, isDrawing } = this.state;
    if (!isDrawing) return;
    const rect = this.canvas.current.getBoundingClientRect();
    const { x, y } = rect;
    const thisX = e.clientX - x;
    const thisY = e.clientY - y;
    // this.ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    this.ctx.beginPath();
    this.ctx.moveTo(lastX, lastY); //start from
    this.ctx.lineTo(thisX, thisY); //go to
    this.ctx.stroke();
    this.setState({
      ...this.state,
      activeDoodle: true,
      lastX: thisX,
      lastY: thisY
    });
  };
}

export default WoolyWilly;
