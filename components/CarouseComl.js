import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

function CarouselCom() {
  return (
    <div className="ch w-full flex justify-center">
      <Carousel className="w-full sm:w-10/12 lg:w-8/12" emulateTouch showStatus={false} showArrows={false} infiniteLoop autoPlay interval={4000} showThumbs={false}>
        <Image src="/img/milk1.jpg" alt="poster" width={1280} height={720} layout="responsive" />
        <Image src="/img/milk2.jpg" alt="poster" width={1280} height={720} layout="responsive" />
        <Image src="/img/milk3.jpg" alt="poster" width={1280} height={720} layout="responsive" />
      </Carousel>
    </div>
  );
}

export default CarouselCom;
