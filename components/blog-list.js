import Link from 'next/link'
import Date from '../components/date'
import styles from './blog-list.module.css'

export default function BlogList({ data }) {
    if (data.length !== 0 && data != "not found") {
        return (
            <div className={styles.list}>
                {/* Taken from the NextJS tutorial https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops*/}
                {/* Add this <section> tag below the existing <section> tag */}
                <section>
                    <ul>
                        {data.map(({ frontMatter, slug }) => (
                            <Link href={`posts/${slug}`}>
                                <li key={slug} >
                                    <h3>{frontMatter.title}</h3>
                                    <Date dateString={frontMatter.date} />
                                </li>
                            </Link>
                        ))}
                    </ul>
                </section>
            </div>
        );
    }

    return (
        <h4>Coming Soon</h4>
    );
}