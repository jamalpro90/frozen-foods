import Image from 'next/image';
import SectionBoxItem from './SectionBoxItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function SectionBoxLeft(props) {
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
    <div className="md:container px-0 md:px-4">
      <div className=" w-full h-[383px] relative my-20">
        {/* left content */}
        <div className="w-full lg:w-8/12 absolute left-0 top-0 bottom-0 rounded-xl z-10">
          <div className="bg-teal-300 h-full rounded-lg flex flex-col items-center shadow-xl p-5">
            {/* content title */}
            <h3 className="text-xl font-robo-slab font-medium tracking-wider pb-4 flex flex-wrap justify-center items-center">{props.title}</h3>
            {/* content */}
            <div className="h-full w-full bg-white rounded-xl shadow-lg p-4">
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
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
                <SectionBoxItem />
                <SectionBoxItem />
                <SectionBoxItem />
                <SectionBoxItem />
                <SectionBoxItem />
                <SectionBoxItem />
                <SectionBoxItem />
              </Carousel>
            </div>
          </div>
        </div>
        {/* right image */}
        <div className="md:w-10/12 lg:w-6/12 xl:w-5/12 absolute right-0 md:bottom-24 lg:bottom-0 sm:hidden md:block">
          <Image src="/img/discount.svg" alt="background" width={485} height={341} layout="responsive" />
        </div>
      </div>
    </div>
  );
}

export default SectionBoxLeft;
