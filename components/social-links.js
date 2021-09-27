import TwitterIcon from '@mui/icons-material/Twitter'
import GithubIcon from '@mui/icons-material/GitHub'
import LinkedinIcon from '@mui/icons-material/LinkedIn'

export default function SocialLinks() {
    return (
        //Link to Material UI icons https://mui.com/components/material-icons/
        <ul>
            <li>
                <a href="https://twitter.com/bradywalters_">
                    <TwitterIcon />
                </a>
            </li>
            <li>
                <a href="https://github.com/bradywalters">
                    <GithubIcon />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/brady-walters/">
                    <LinkedinIcon />
                </a>
            </li>
        </ul>
    );
}