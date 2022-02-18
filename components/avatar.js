import Image from 'next/image'
import profilePic from '../public/headshot.jpg'
import styles from './avatar.module.css'

export default function myAvatar() {
    return (
        <div className={styles.container}>
            <Image src={profilePic} alt="Headshot of Brady Walters" className={styles.circle} />
        </div>
    )
}
