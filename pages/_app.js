import theme from 'theme-ui-preset-geist'
import Layout from '../components/layout'
import { ThemeProvider } from '@theme-ui/core'

export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}