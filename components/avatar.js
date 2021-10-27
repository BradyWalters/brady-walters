import Image from 'next/image'
import profilePic from '../public/headshot.jpg'
import Avatar from '@mui/material/Avatar'

export default function myAvatar() {
  return (
    <Avatar variant='circular' sx={{ width: 64, height: 64}}>
      <Image 
          src={profilePic} 
          alt="Picture of Brady Walters" 
          layout="fill"
      />
    </Avatar>
  )
}
