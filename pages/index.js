import Head from 'next/head'
import BlogList from '../components/blog-list'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Brady Walters</title>
      </Head>

      <h1>Hi Brady</h1>
      <BlogList data={allPostsData} />
    </div>
  )
}

//Pulled from NextJS tutorial https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
