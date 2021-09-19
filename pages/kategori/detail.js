/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import CategorySub from '../../components/CategorySub';
import Layout from '../../components/Layout';
import { StarIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import SectionCategoryItem from '../../components/SectionCategoryItem';
import SectionAnotherDetail from '../../components/SectionAnotherDetail';

function detail() {
  const [count, setCount] = useState(0);

  return (
    <Layout title="Detail Item">
      <CategorySub />

      <div className="flex flex-col lg:flex-row">
        {/* carousel */}
        <div className="w-full lg:w-1/2 p-0 sm:p-4 lg:p-6">
          <Carousel className="cci" emulateTouch showStatus={false}>
            <img src="/img/sosis.jpg" alt="sosis" className="w-full h-auto" />
            <img src="/img/sosis.jpg" alt="sosis" className="w-full h-auto" />
            <img src="/img/sosis.jpg" alt="sosis" className="w-full h-auto" />
          </Carousel>
        </div>

        {/* detail content */}
        <div className="w-full lg:w-1/2">
          <div className="container mx-auto py-6">
            <h4 className="font-robo-slab text-3xl md:text-4xl font-medium tracking-wider flex flex-wrap py-2">Sosis Sapi Ayam Isi 15</h4>
            <div className="flex justify-between w-12/12 py-1 self-start w-5/12 md:w-3/12">
              <StarIcon className="w-8 h-8 text-yellow-400" />
              <StarIcon className="w-8 h-8 text-yellow-400" />
              <StarIcon className="w-8 h-8 text-yellow-400" />
              <StarIcon className="w-8 h-8 text-yellow-400" />
              <StarIcon className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-robo-slab font-bold tracking-wider text-teal-900 py-1 self-start">Rp. 25.000</h3>
            <h5 className="font-robo-slab font-bold text-base lg:text-xl tracking-wider py-1 pt-4">Deskripsi</h5>
            <p className="text-sm lg:text-base text-gray-600 tracking-wider leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatibus non delectus sunt ea minus, quod id nesciunt aliquam! Amet fugiat facere, blanditiis ex aliquid reiciendis? Maxime dolorum asperiores
              consequatur?
            </p>
            {/* count box item */}
            <div className="flex justify-between my-8 w-4/12 sm:w-3/12 lg:w-5/12 h-auto">
              <div onClick={() => count > 0 && setCount(count - 1)} className="w-[25px] h-[25px] border border-teal-900 rounded flex justify-center items-center cursor-pointer">
                <p className="text-3xl text-teal-900 -mt-1">-</p>
              </div>
              <div className="w-[15vw] sm:w-[10vw] lg:w-[7vw] h-[25px] border border-teal-900 rounded flex justify-center items-center">
                <p className="text-base text-teal-900">{count}</p>
              </div>
              <div onClick={() => setCount(count + 1)} className="w-[25px] h-[25px] border border-teal-900 bg-teal-900 rounded flex justify-center items-center cursor-pointer">
                <p className="text-3xl text-white -mt-1">+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* item recomended */}
      <div className="w-full">
        {/* produk terkait */}
        <SectionAnotherDetail title="Produk Terkait" />
        <SectionAnotherDetail title="Produk Terlaris" />
      </div>
    </Layout>
  );
}

export default detail;
