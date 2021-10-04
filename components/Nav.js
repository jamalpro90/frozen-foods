import { useEffect, useState } from 'react';
import Link from 'next/link';

function Nav() {
  const [navBg, setNavBg] = useState(false);
  const [navItem, setNavItem] = useState({
    active: null,
    items: [
      {
        id: 1,
        text: 'Produk Terlaris',
      },
      {
        id: 2,
        text: 'Diskon',
      },
      {
        id: 3,
        text: 'Bakso',
      },
      {
        id: 4,
        text: 'Nugget',
      },
      {
        id: 5,
        text: 'Sosis',
      },
      {
        id: 6,
        text: 'Pizza',
      },
      {
        id: 7,
        text: 'Seafoods',
      },
      {
        id: 8,
        text: 'Susu',
      },
      {
        id: 9,
        text: 'Yogurt',
      },
      {
        id: 10,
        text: 'Maryam',
      },
      {
        id: 11,
        text: 'Risolles',
      },
      {
        id: 12,
        text: 'Lainya',
      },
    ],
  });

  const toggleActive = (index) => {
    setNavItem({ ...navItem, active: navItem.items[index] });
  };

  const toggleActiveStyle = (index) => {
    if (navItem.items[index] === navItem.active) {
      return 'bg-teal-600 text-white rounded';
    } else {
      return '';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    });
  }, [navBg]);

  return (
    <div className="w-full h-auto fixed z-50">
      {/* nav content container */}
      <div className={`nav  flex items-center py-3 md:py-4 px-10 font-medium text-base overflow-x-scroll scrollbar-hide cursor-pointer w-screen transition duration-200 ease-in ${navBg && 'bg-teal-200'}`}>
        {/* nav item */}
        {navItem.items.map((item, index) => (
          <Link key={item.id} href="/kategori" passHref>
            <p onClick={() => toggleActive(index)} className={`mr-6 md:mr-8 hover:scale-110 transition duration-200 text-sm md:text-base font-robo-slab whitespace-nowrap py-1 px-2 ${toggleActiveStyle(index)}`}>
              {item.text}
            </p>
          </Link>
          // code dibawah cuman hasil belajar
          // <div key={index} onClick={() => toggleActive(index)} className={`w-16 h-14 ml-6 text-center inactive ${toggleActiveStyle(index)}`}>
          //   {item.id}
          // </div>
        ))}
      </div>
      <div className={`h-[52px] md:h-[63px] w-28 bg-gradient-to-l from-white -right-3 top-0 absolute transition duration-200 ease-in ${navBg ? 'from-teal-200' : 'from-white'}`} />
    </div>
  );
}

export default Nav;
