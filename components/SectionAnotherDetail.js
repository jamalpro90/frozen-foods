import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SectionCategoryItem from './SectionCategoryItem';

function SectionAnotherDetail(props) {
  const responsive = {
    'desktop-plus': {
      breakpoint: { max: 3000, min: 1280 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    'tablet-mini': {
      breakpoint: { max: 640, min: 500 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };

  return (
    <div className="container mx-auto mt-10">
      <h4 className="text-center font-robo-slab font-medium text-xl lg:text-2xl py-4">{props.title}</h4>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <SectionCategoryItem />
        <SectionCategoryItem />
        <SectionCategoryItem />
        <SectionCategoryItem />
        <SectionCategoryItem />
        <SectionCategoryItem />
        <SectionCategoryItem />
        <SectionCategoryItem />
      </Carousel>
    </div>
  );
}

export default SectionAnotherDetail;
