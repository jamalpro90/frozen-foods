import CarouselCom from '../components/CarouseComl';
import Layout from '../components/Layout';
import SectionBoxLeft from '../components/SectionBoxLeft';
import SectionBoxRight from '../components/SectionBoxRight';

export default function Home() {
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
