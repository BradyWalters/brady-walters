import Avatar from './avatar'
import styles from './title.module.css'
import Link from 'next/link'

export default function Title() {
    return (
        <div className={styles.title}>
            <Avatar />
            <h1>Brady Walters</h1>
        </div>
    )
}