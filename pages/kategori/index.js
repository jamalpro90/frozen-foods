import CategorySub from '../../components/CategorySub';
import Layout from '../../components/Layout';
import SectionCategoryItem from '../../components/SectionCategoryItem';

function kategori() {
  return (
    <Layout title="Kategori">
      <CategorySub />

      <div className="container mx-auto flex justify-between flex-wrap">
        <SectionCategoryItem />
        <SectionCategoryItem />
        <SectionCategoryItem />
        <SectionCategoryItem />
        <SectionCategoryItem />
        <SectionCategoryItem />
      </div>
    </Layout>
  );
}

export default kategori;
