import { Card, Link } from '@mui/material'
import { CardActionArea } from '@mui/material';
import Date from '../components/date'

export default function BlogList({ data }) {
  if(data.length !== 0 && data != "not found") {
    return (
      <>
        {/* Taken from the NextJS tutorial https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops*/}
        {/* Add this <section> tag below the existing <section> tag */}
        <section>
          <ul>
            {data.map(({ frontMatter, slug }) => (
              <li key={ slug } ><Link href={"posts/" + slug}>
              <Card>
                <CardActionArea>
                  <li key={slug}>
                    {frontMatter.title}
                    <br />
                    <Date dateString={frontMatter.date} />
                  </li>
                </CardActionArea>
              </Card>
              </Link></li>
            ))}
          </ul>
        </section>
      </>
    );
  }

  return (
    <h4>Coming Soon</h4>
  );
}