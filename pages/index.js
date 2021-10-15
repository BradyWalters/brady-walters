import Head from 'next/head'
import BlogList from '../components/blog-list'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Brady Walters</title>
      </Head>

      <BlogList data={posts} />
    </div>
  )
}

//Pulled from this great blog post https://blog.jetbrains.com/webstorm/2021/10/building-a-blog-with-next-js-and-mdx/
//TODO: work on putting this in a library, making it more general use
export const getStaticProps = async () => {
  const posts = getSortedPostsData()

  return {
    props: {
      posts
    }
  }
}
