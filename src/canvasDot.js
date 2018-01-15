import React, { Component } from 'react';

//Adds a circle with random size and color within range as mouse moves
class Canvas extends Component {

  constructor(props) {
    super(props);
    this.ctx = null;
    this.state = {
      lastPoint: Array(2).fill(null)
    }
  }

  componentDidMount() {
    var canvas = this.refs.canvas;
    this.ctx = this.refs.canvas.getContext("2d");
    this.draw({clientX: window.innerWidth*.4, clientY: window.innerHeight*.4}, 150)
    this.draw({clientX: window.innerWidth*.6, clientY: window.innerHeight*.5}, 50)
    this.draw({clientX: window.innerWidth*.5, clientY: window.innerHeight*.7},80)
    
  }

  getRandomColor() {
    var colors = ["#07C8A0", "#22B3FB", "#FFC3DC", "#FF6272", "#FFD769", "#FF996E"];
    return colors[(Math.floor(Math.random()*colors.length))];
  }

  getRandomWidth(min) {
    var min = min || 10;
    return (Math.floor(Math.random()*120+min));
  }

  dist(currPoint, lastPoint) {
    return Math.sqrt(Math.pow(currPoint[0]-lastPoint[0],2) + Math.pow(currPoint[1]-lastPoint[1],2))
  }


  draw(event, width) {
    console.log("mousemove");
    var currPoint = [event.clientX, event.clientY];
    if (this.state.lastPoint[0] == null || this.dist(currPoint,this.state.lastPoint) > 120) {
      this.ctx.globalCompositeOperation = 'multiply';
      var width = this.getRandomWidth(width)
      this.ctx.beginPath();
      this.ctx.arc(currPoint[0],currPoint[1],width,0,2*Math.PI);
      this.ctx.fillStyle = this.getRandomColor();
      this.ctx.fill();

      this.setState({lastPoint:currPoint});
    }
  }
  render() {
    return(
      <canvas ref="canvas" width={window.innerWidth} height={window.innerHeight} onMouseMove={(event) => this.draw(event)} />
    )
  }
}

export default Canvas;