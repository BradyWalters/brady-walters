import SidebarLinks from "./sidebar-links";
import SocialLinks from "./social-links";
import styles from './top-links.module.css'

export default function TopLinks() {
    return (
        <div className={styles.links}>
            <SidebarLinks />
            <SocialLinks />
        </div>
    )
}