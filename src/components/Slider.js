import React from 'react';
import '../scss/components/_slider.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slider = (props) => {
    const renderedSlides = props.slides.map(image => {
        return (
            <div key={image.url}>
                <img className="slider__itemImage" src={image.url} alt={image.alt} key={image.url}/>
            </div>
        )
    })

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 768 },
          items: 3,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 768, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
    };

    return (
        <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="all ease-in-out .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            centerMode={true}
            //deviceType={this.props.deviceType}
            itemClass="slider__item"
            renderButtonGroupOutside={true}
        >
            {renderedSlides}
        </Carousel>
    )
}

export default Slider;
