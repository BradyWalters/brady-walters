import Image from 'next/image'
import Link from 'next/link'
import profilePic from '../public/headshot.jpg'
import styles from './avatar.module.css'

export default function myAvatar() {
    return (
        <Link href='/'>
            <Image src={profilePic} className={styles.circle}/>
        </Link>
    )
}
