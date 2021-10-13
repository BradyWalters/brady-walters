import Avatar from "./avatar";
import SidebarLinks from "./sidebar-links";
import SocialLinks from "./social-links";

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