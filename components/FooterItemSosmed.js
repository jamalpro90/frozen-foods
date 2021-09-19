import Image from 'next/image';
import { useEffect, useState } from 'react';

function FooterItem({ title, contentsType }) {
  function iconHref(value) {
    if (value === 'fa-facebook') {
      return 'https://facebook.com';
    } else if (value === 'fa-instagram') {
      return 'https://instagram.com';
    } else if (value === 'fa-youtube') {
      return 'https://youtube.com';
    } else if (value === 'fa-whatsapp') {
      return 'https://whatsapp.com';
    } else {
      return null;
    }
  }

  return (
    <div className="flex flex-col mr-10 mt-4">
      <h4 className="font-medium text-xl tracking-wide">{title}</h4>
      <div className="flex pt-2">
        {contentsType.map((type, index) => (
          <a key={index} href={iconHref(type)} target="_blank" rel="noreferrer" className="text-2xl text-gray-500 hover:text-teal-800 mr-3 transform hover:scale-150 transition duration-200 cursor-pointer">
            <i className={`fab ${type}`} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default FooterItem;
