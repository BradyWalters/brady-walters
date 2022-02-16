import Image from 'next/image'
import profilePic from '../public/headshot.jpg'
import styles from './avatar.module.css'

export default function myAvatar() {
    return (
        <Image src={profilePic} alt="Headshot of Brady Walters" className={styles.circle} width={90} height={50}/>
    )
}
