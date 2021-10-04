import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CarouselCom from '../components/CarouseComl';
import Layout from '../components/Layout';
import SectionBoxLeft from '../components/SectionBoxLeft';
import SectionBoxRight from '../components/SectionBoxRight';
import { funcLoginStatus } from '../config/firebase';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    funcLoginStatus(router);
  }, []);

  return (
    <>
      <Layout title="Home">
        <CarouselCom />
        <SectionBoxRight title="Produk Terlaris Minggu Ini" />
        <SectionBoxLeft title="Produk Diskon Minggu Ini" />
        <SectionBoxRight title="Produk Rekomendasi Minggu Ini" />
      </Layout>
    </>
  );
}
