import React from 'react';
import $ from 'jquery';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.clickedLeft = this.clickedLeft.bind(this);
    this.clickedRight = this.clickedRight.bind(this);
  }

  clickedLeft() {
    let prevImage = this.props.image;
    let currImage = (this.props.sources.length + prevImage - 1) % this.props.sources.length;
    let start = this.props.start;
    let end = this.props.end;
    if (currImage < start) {
      start --;
      end --;
    }
    this.props.update(currImage, start, end);
  }

  clickedRight() {
    let prevImage = this.props.image;
    let currImage = (this.props.sources.length + prevImage + 1) % this.props.sources.length;
    let start = this.props.start;
    let end = this.props.end;
    if (currImage > end) {
      start ++;
      end ++;
    }
    this.props.update(currImage, start, end);
  }
  componentDidMount () {

  }

  render () {
    let current = this.props.image;
    return (
      <div class='POcarousel fade-in'>
        {
          current !== 0 && <button id='POcarousel-left' class='POcarousel-button' aria-label='previous-slide' onClick={this.clickedLeft}>{'<'}</button>
        }
        {
          <img class='POcarousel-img' index={this.props.image} src={this.props.sources[this.props.image].url}></img>
        }
        {
          current !== this.props.sources.length - 1 && <button id='POcarousel-right' class='POcarousel-button' aria-label='next-slide' onClick={this.clickedRight}>{'>'}</button>
        }
      </div>
    )
  }
}

export default Carousel;