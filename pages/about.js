import MDXDocument from '../about.mdx'
import Head from 'next/head'

export default function Post() {
    return (
      <>
        <Head>
          <title>About Me</title>
        </Head>
        
        <MDXDocument />
      </>
    )
  }
  