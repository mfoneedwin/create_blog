import Layout from '../components/Layout'
import { ToastContainer } from 'react-toastify'
import '../styles/globals.css'
import "react-toastify/dist/ReactToastify.css"



function MyApp({ Component, pageProps }) {
  return(
    <Layout>
    {/* ToastContainer imported from react-toastify to check failed message */}
    <ToastContainer limit={1} />
   <Component {...pageProps} />
  </Layout>  
  ) 
}

export default MyApp
