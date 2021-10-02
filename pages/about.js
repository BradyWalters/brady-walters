import { getPostData } from '../lib/posts'
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
        <iframe src="https://drive.google.com/file/d/1M28qiZQKcYmCRAiLh74nji4-LJK_dZgZ/preview" width="640" height="480" allow="autoplay"></iframe>
      </div>
    )
  }
  

export async function getStaticProps() {
  const postData = await getPostData('about', path.join(process.cwd()))
  return {
    props: {
      postData
    }
  }
}