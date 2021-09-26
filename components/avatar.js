import Image from 'next/image'
import profilePic from '../public/headshot.jpg'

export default function Avatar() {
  return (
    <Image 
        src={profilePic} 
        alt="Picture of Brady Walters" 
        width={100}
        height={75}
    />
  )
}
