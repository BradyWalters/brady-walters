import SidebarLinks from "./sidebar-links";
import SocialLinks from "./social-links";
import styles from './top-links.module.css'
import ThemeToggle from "./theme-toggle";

export default function TopLinks() {
    return (
        <div className={styles.links}>
            <SidebarLinks />
            <SocialLinks />
            <ThemeToggle />
        </div>
    )
}