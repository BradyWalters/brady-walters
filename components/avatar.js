import Image from 'next/image'
import Link from 'next/link'
import profilePic from '../public/headshot.jpg'
import Avatar from '@mui/material/Avatar'

export default function myAvatar() {
  return (
    <Avatar variant='circular' sx={{ width: 64, height: 64, ml: 2 }}>
      <Link href="/">
        <a>
          <Image 
              src={profilePic} 
              alt="Picture of Brady Walters" 
              layout="fill"
          />
        </a>
      </Link>
    </Avatar>
  )
}
