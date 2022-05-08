import '../styles/globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
