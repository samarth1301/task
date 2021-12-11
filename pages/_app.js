import '../styles/globals.css'
import Navbar from '../Components/Navbar'
import BlogTitle from '../Components/BlogTitle'
function MyApp({ Component, pageProps }) {
  return(
    <>
    <Navbar/>
    <BlogTitle/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
