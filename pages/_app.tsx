import '../styles/globals.css';
import type { AppProps /*, AppContext */ } from 'next/app'
import Header from '../components/Header';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header></Header>
			<Layout>
			<Navbar></Navbar>
			<Component {...pageProps}/>
			</Layout>
		</>
	)
}

export default MyApp;
