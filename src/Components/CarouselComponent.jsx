import { React , useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../stylesheets/CarouselComponent.css'

function CarouselComponent(props) {

  const { items, onClick , onIndexChange} = props;

  const handleSelect = (selectedIndex, e) => {
    onIndexChange(selectedIndex);
  };

  useEffect(() => {
    onIndexChange(0);
  }, []);

  return (
        <div className="contenedor-carousel-princ">
        <Carousel onSelect={handleSelect}>
          {items.map((item, index) => (
            <Carousel.Item key={index} onClick={onClick}>
              <img
                className="d-block carousel-image"
                src={item.imageSrc}
                alt={item.imageAlt}
              />
              <Carousel.Caption>
                <div className="carousel-caption" style={{backgroundColor: "gray"}}>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        </div>
  );
}

export default CarouselComponent;