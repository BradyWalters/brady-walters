//Pretty much this whole file is taken from the Next JS tutorial https://nextjs.org/learn/basics/dynamic-routes/render-markdown

import { getAllPostIds, getPostData } from '../../lib/posts'
import path from 'path'

export default function Post({ postData }) {
    return (
      <div>
        {/* {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date} */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    )
  }
  

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id, path.join(process.cwd(), 'posts'))
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
