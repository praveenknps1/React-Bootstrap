import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


class Caro extends Component{

  render(){
   

    return(
      <>

      
      

      <Carousel>
    <Carousel.Item>
      <img src="https://th.bing.com/th/id/OIP.JbBpts8DpTwg1253grV3YAHaHa?w=147&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" width="400" height="400" />
      <Carousel.Caption>
        <h3>DUM chicken biryani</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://th.bing.com/th/id/OIP.UNTFo6Nb9GgeXdDX9ajr9gHaE7?w=306&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width="400" height="400" />
      <Carousel.Caption>
        <h3>Kerala recipi biryani</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src="https://th.bing.com/th/id/OIP.8__flpyDigXPJb88U3xhsAHaLH?w=131&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width="400" height="400" />
      <Carousel.Caption>
        <h3>Jera rice</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
      
      </>
  )

  }

}

export default Caro;