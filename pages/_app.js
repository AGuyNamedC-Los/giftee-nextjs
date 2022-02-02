import '../styles/globals.css';
import Header from '../components/Header.js';
import Layout from '../components/Layout.js';
import Navbar from '../components/Navbar.js';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Layout>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
