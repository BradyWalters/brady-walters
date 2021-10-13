export default function BlogList({ data }) {
  if(data.length !== 0) {
    return (
      <>
        {/* Taken from the NextJS tutorial https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops*/}
        {/* Add this <section> tag below the existing <section> tag */}
        <section>
          <ul>
            {data.map(({ frontMatter, slug }) => (
              <li key={slug}>
                {frontMatter.title}
                <br />
                {frontMatter.date}
              </li>
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