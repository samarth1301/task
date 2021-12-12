import '../styles/globals.css'
import Navbar from '../Components/Navbar'
import BlogTitle from '../Components/BlogTitle'
import SwitchTab from '../Components/SwitchTab'
import Footer from '../Components/Footer'
import Feedback from '../Components/Feedback'
function MyApp({ Component, pageProps }) {
  return(
    <>
    <Navbar/>
    <BlogTitle/>
    <SwitchTab/>
    <Component {...pageProps} />

    <Footer/>
    </>
  )
}

export default MyApp
