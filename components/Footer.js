import FooterItem from './FooterItem';
import FooterItemSosmed from './FooterItemSosmed';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="border-t-2 border-teal-900 pt-16 relative overflow-hidden">
      {/* footer content container */}
      <div className="container mx-auto flex flex-wrap mb-6">
        <FooterItem title="Tentang" contents={['Kantor', 'Karier', 'Blog']} />
        <FooterItem title="Bantuan" contents={['Pusat Bantuan', 'Syarat & Ketentuan', 'kebijakan Privasi']} />
        <FooterItem title="Bisnis" contents={['Menjadi Partner', 'Belanja Untuk Bisnis Anda']} />
        <FooterItemSosmed title="Ikuti Kami" contentsType={['fa-facebook', 'fa-instagram', 'fa-youtube', 'fa-whatsapp']} />
      </div>
      {/* footer image small */}
      <div className="lg:hidden">
        <Image className="footer-img" src="/img/footer.svg" alt="footer" width={1280} height={720} layout="responsive" />
      </div>
      {/* footer image large */}
      <div className="footer-img lg:bg-footer-img lg:bg-no-repeat lg:bg-cover lg:w-5/12 lg:h-72 lg:absolute lg:-right-12 lg:bottom-12" />
      {/* footer wave */}
      <div className=" absolute bottom-[27px] md:bottom-[46px] lg:bottom-[44px] left-0 right-0 z-50 lg:mt-60">
        <Image className="" src="/img/wave.svg" alt="footer" width={1280} height={290} layout="responsive" />
      </div>
      {/* footer copyright */}
      <div className="w-full bg-[#222] h-[30px] md:h-[50px] flex justify-center items-center lg:mt-60">
        <p className="text-xs md:text-sm text-gray-50">&copy; 2021 Brand. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
