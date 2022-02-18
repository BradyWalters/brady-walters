import Image from 'next/image'
import profilePic from '../public/headshot.jpg'
import styles from './avatar.module.css'
import Link from 'next/link'

export default function myAvatar() {
    return (
        <Link href='/'>
            <div className={styles.container}>
                <Image src={profilePic} alt="Headshot of Brady Walters" className={styles.circle} />
            </div>
        </Link>
    )
}
