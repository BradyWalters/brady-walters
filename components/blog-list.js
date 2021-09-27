export default function BlogList({ data }) {
  if(data.length !== 0) {
    return (
      <>
        {/* Taken from the NextJS tutorial https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops*/}
        {/* Add this <section> tag below the existing <section> tag */}
        <section>
          <ul>
            {data.map(({ id, date, title }) => (
              <li key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
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