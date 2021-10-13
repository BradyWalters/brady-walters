import Head from 'next/head'
import BlogList from '../components/blog-list'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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
  const files = fs.readdirSync(path.join(process.cwd(), 'posts'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}
