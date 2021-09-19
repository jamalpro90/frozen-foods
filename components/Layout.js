import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />
      <div className="pt-[115px] md:pt-[60px]">
        <Nav />
      </div>

      <div className="my-14 md:my-16 lg:my-20">{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;
