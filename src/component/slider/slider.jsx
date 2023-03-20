import './slider.css'
import Item from '../items-view/item';

import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      autoplay:true,
      autoplaySpeed:2000,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows:false,
    };
    return (
      <div>
        <h2> {this.props.name}</h2>
        <Slider {...settings}>
          <div className='content'>
            
          <Item title={this.props.t1} link={this.props.img1}/>
          </div>
          <div className='content'>
          <Item title={this.props.t2} link={this.props.img2}/>
          </div>
          <div className='content'>
          <Item title={this.props.t3} link={this.props.img3} />
          </div>
          <div className='content'>
          <Item title={this.props.t4} link={this.props.img4}/>
          </div>
          <div className='content'>
          <Item title={this.props.t5} link={this.props.img5}/>
          </div>
          
          <div className='content'>
          <Item title={this.props.t6} link={this.props.img6}/>
          </div>
          <div className='content'>
          <Item title={this.props.t7} link={this.props.img7}/>
          </div>
          <div className='content'>
          <Item title={this.props.t8} link={this.props.img8}/>
          </div>
        </Slider>
      </div>
    );
  }
}