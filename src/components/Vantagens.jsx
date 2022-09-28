import Carousel from 'react-bootstrap/Carousel'

function Vantagens() {
    return (
      <div className='carousel'>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/Keracoll3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>EngeSondagens Porquê?</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/Keracoll7.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Projectos à Medida</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/Keracoll1.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Captação de Águas</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )
}

export default Vantagens