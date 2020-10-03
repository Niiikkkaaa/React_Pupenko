import React, { Component } from 'react';
import './Week2.css'
import Glide from "./Glide";
import { Checkbox, Container, Radio, Form, Input } from "semantic-ui-react";

class Week2 extends Component {

  state = {
    autoplay: false,
    type: 'carousel',
    perView: 1
  };

  render() {
    const { autoplay, type, perView } = this.state;
    return (
      <Container>
        <Form>
          <Form.Field>
            <Input value={perView} type='number' min='1' onChange={(e) => this.setState({ perView: e.target.value })} />
          </Form.Field>
          <Form.Field>
            <Checkbox label='Autoplay' checked={autoplay} onChange={() => this.setState({ autoplay: !autoplay })} />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Carousel'
              name='type'
              value='carousel'
              checked={type === 'carousel'}
              onChange={() => this.setState({ type: 'carousel' })}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Slider'
              name='type'
              value='slider'
              checked={type === 'slider'}
              onChange={() => this.setState({ type: 'slider' })}
            />
          </Form.Field>
        </Form>
        {
          <Glide options={{autoplay: autoplay ? 1000 : false, type, perView}}>

            <img className="full-with-img" 
                 src="https://i.morioh.com/200613/cbd162d1.jpg" 
                 alt=""/>
            <img className="full-with-img"
                 src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/top-20-angularjs-developer-tools.jpg"
                 alt=""/>
            <img className="full-with-img"
                 src="https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*wFL3csJ96lQpY0IVT9SE3w.jpeg?ssl=1"
                 alt=""/>
          </Glide>
        }
      </Container>
    );
  }
}

export default Week2;
