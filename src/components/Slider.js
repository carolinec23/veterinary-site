import React from 'react';
import '../scss/components/_slider.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Button from './Button';

const Slider = (props) => {
    const renderedSlides = props.slides.map(image => {
        return (
            <div>
                <img src={image.url} alt={image.alt} />
            </div>
        )
    })

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
    };

    const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return <Button text={"Hello temp"} onClick={() => onClick()} className="react-multiple-carousel__arrow" />;
      };
      

    return (
        <Carousel
            //customLeftArrow={<CustomLeftArrow />}
            //customRightArrow={<CustomRightArrow />}
            //arrows={false}  //temp??
            swipeable={false}
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
            //itemClass="carousel-item-padding-40-px"
            itemClass="slider__item"
            renderButtonGroupOutside={true}
        >
            {renderedSlides}
        </Carousel>
    )
}

export default Slider;
