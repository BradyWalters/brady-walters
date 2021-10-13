import Link from 'next/link'

export default function SidebarLinks() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/posts/about"><a>About</a></Link>
                </li>
                <li>
                    <Link href="/"><a>Blog</a></Link>
                </li>
            </ul>
        </div>
    );
}