import Image from 'next/image'
import React from 'react'
import EasyLogo from "$/public/Easy.png"
import Link from 'next/link'

const Nav = () => {
  return (
    <div className='flex lg:justify-around justify-between pr-8 items-center'>
        <nav>
            <Image src={EasyLogo} alt="Easy logo" width={150} height={150}/>
        </nav>
        <Link href="/" className='text-neutral-300 text-xl'>FAQ</Link>
    </div>
  )
}

export default Nav