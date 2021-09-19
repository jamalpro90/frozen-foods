import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';

function SectionCategoryItem() {
  return (
    <Link href="/kategori/detail" passHref>
      <div className="group w-[145px] md:w-[164px] h-[250px] md:h-[280px] border-2 lg:border-0 lg:hover:border-2 border-teal-900 rounded flex flex-col items-center py-1 px-2 my-2 lg:ml-2 transform scale-90 sm:scale-100 transition-all duration-200 lg:hover:scale-100 cursor-pointer">
        {/* item picture */}
        <Image src="/img/sosis.jpg" alt="sosis" width={150} height={105} layout="intrinsic" />
        {/* item title */}
        <h4 className="font-robo-slab text-sm md:text-base font-medium tracking-wider flex flex-wrap py-2">Sosis Sapi Ayam Isi 15</h4>
        {/* item stars */}
        <div className="flex justify-between w-12/12 py-1 self-start">
          <StarIcon className="w-5 h-5 text-yellow-400" />
          <StarIcon className="w-5 h-5 text-yellow-400" />
          <StarIcon className="w-5 h-5 text-yellow-400" />
          <StarIcon className="w-5 h-5 text-yellow-400" />
          <StarIcon className="w-5 h-5 text-yellow-400" />
        </div>
        {/* item price */}
        <h3 className="text-xl md:text-2xl font-robo-slab font-bold tracking-wider text-teal-900 py-1 self-start">Rp. 25.000</h3>
        {/* item add cart box */}
        <div className="w-[120px] md:w-[140px] h-[30px] md:h-[40px] bg-teal-900 rounded flex justify-center items-center mt-2 lg:hidden lg:group-hover:flex transition-all duration-200">
          <p className="text-white font-bold text-sm md:text-base tracking-wider">Tambah</p>
        </div>
      </div>
    </Link>
  );
}

export default SectionCategoryItem;
