//Pretty much this whole file is taken from the Next JS tutorial https://nextjs.org/learn/basics/dynamic-routes/render-markdown

import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import styles from './[slug].module.css'

export default function PostPage({ frontMatter: { title }, mdxSource }) {
  
  return (
    <div className={styles.content}>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <MDXRemote {...mdxSource} />
    </div>
  )
}
  

  export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts',
      slug + '.mdx'), 'utf-8')
  
    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)
  
    return {
      props: {
        frontMatter,
        slug,
        mdxSource
      }
    }
  }

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}