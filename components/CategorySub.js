import Link from 'next/link';

function CategorySub() {
  return (
    <div className="container mx-auto -mt-3 mb-8">
      <div className="flex">
        <Link href="/">
          <a className="font-medium text-xs text-gray-600 mr-4 cursor-pointer">Beranda</a>
        </Link>
        <p className=" mr-4 text-xs text-gray-600">
          <i className="fas fa-chevron-right"></i>
        </p>
        <p className="font-medium text-xs text-gray-600 mr-4">Produk Terlaris</p>
      </div>
    </div>
  );
}

export default CategorySub;
