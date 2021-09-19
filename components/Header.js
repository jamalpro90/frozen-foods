import { SearchIcon } from '@heroicons/react/outline';
import { UserIcon, ShoppingCartIcon } from '@heroicons/react/solid';
import Link from 'next/link';

function Header() {
  return (
    <div className="bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 fixed top-0 right-0 left-0 z-50">
      {/* all header container */}
      <div className="container mx-auto pb-5 md:pb-0">
        {/* header content container */}
        <div className=" flex items-center justify-between h-[60px] ">
          {/* header left */}
          <div className="flex items-center">
            {/* logo brand */}
            <Link href="/">
              <a className="text-white font-bold text-3xl tracking-wider cursor-pointer">BRAND</a>
            </Link>
            {/* search box */}
            <div className="ml-5  bg-white rounded overflow-hidden hidden sm:w-[300px] lg:w-[500px] md:flex justify-between items-center">
              <input type="text" placeholder="Cari Berdasarkan Nama" className="py-2 px-3 w-[480px] outline-none font-robo-slab text-sm" />
              <SearchIcon className="lg:h-6 lg:w-6 md:h-8 md:w-8 mr-4 cursor-pointer transform active:scale-110" />
            </div>
          </div>
          {/* header right */}
          <div className="flex items-center w-20 justify-between ">
            <div className="flex flex-col mt-3 group">
              <UserIcon className="h-7 w-7 cursor-pointer text-white" />
              <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition duration-200">Akun</p>
            </div>
            <div className="flex flex-col mt-4 group">
              <ShoppingCartIcon className="h-7 w-7 cursor-pointer text-white" />
              <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition duration-200">Troli</p>
            </div>
          </div>
        </div>
        {/* search box tablet */}
        <div className="bg-white rounded overflow-hidden w-full md:hidden flex justify-between items-center">
          <input type="text" placeholder="Cari Berdasarkan Nama" className="py-2 px-3 w-[480px] outline-none font-robo-slab text-sm" />
          <SearchIcon className="h-7 w-7 mr-4 cursor-pointer transform active:scale-110" />
        </div>
      </div>
    </div>
  );
}

export default Header;
