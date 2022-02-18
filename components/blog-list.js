import Link from 'next/link'
import Date from '../components/date'
import styles from './blog-list.module.css'
import Card from '@mui/material/Card';

export default function BlogList({ data }) {
    if (data.length !== 0 && data != "not found") {
        {/* Taken from the NextJS tutorial https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops*/ }
        {/* Add this <section> tag below the existing <section> tag */ }
        return (
            <ul className={styles.list}>
                {data.map(({ frontMatter, slug }) => (
                    <Card sx={{ minWidth: 300 }} variant="outlined" key={slug}>
                        <Link href={`posts/${slug}`}>
                            <li>
                                <h3>{frontMatter.title}</h3>
                                <Date dateString={frontMatter.date} />
                            </li>
                        </Link>
                    </Card>
                ))}
            </ul>
        );
    }

    return (
        <h4>Coming Soon</h4>
    );
}