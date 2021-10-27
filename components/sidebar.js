import Avatar from './avatar'
import SidebarLinks from "./sidebar-links";
import SocialLinks from "./social-links";
import Image from 'next/image'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Brady Walters</h2>
            <Avatar />
            <SidebarLinks />
            <SocialLinks />
        </div>
    );
}