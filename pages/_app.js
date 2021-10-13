import '../styles/globals.css'
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap')
      </style> 
      <Component {...pageProps} />
    </Layout>
  )
}