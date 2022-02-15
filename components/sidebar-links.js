import Link from 'next/link'
import styles from './sidebar-links.module.css'

export default function SidebarLinks() {
    return (
        <div className="sideLinks">
            <nav className={styles.nav}>
                <Link href="/posts/about"><a>About</a></Link>
                <Link href="/"><a>Blog</a></Link>
            </nav>
        </div>
    );
}