import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from './social-links.module.css'

export default function SocialLinks() {
    return (
        <div>
            <ul className={styles.links}>
                <li>
                    <a href="https://twitter.com/bradywalters_">
                        <TwitterIcon fontSize='large'/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/bradywalters">
                        <GitHubIcon fontSize='large'/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/brady-walters/">
                        <LinkedInIcon fontSize='large'/>
                    </a>
                </li>
            </ul>
        </div>
    );
}