import Link from 'next/link'
import Nav from 'react-bootstrap/Nav';

export default function SidebarLinks() {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link><Link href="/posts/about"><a>About</a></Link></Nav.Link>

            <Nav.Link><Link href="/"><a>Blog</a></Link></Nav.Link>
        </Nav>
    );
}