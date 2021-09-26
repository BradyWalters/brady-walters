export default function BlogList({ data }) {
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