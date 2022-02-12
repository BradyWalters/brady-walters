import Image from 'next/image'
import Link from 'next/link'
import profilePic from '../public/headshot.jpg'
import { Avatar } from 'theme-ui'

export default function myAvatar() {
    return (
        <Link href='/'>
            <Avatar src={profilePic} />
        </Link>
    )
}
