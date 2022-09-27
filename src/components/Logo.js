import React from 'react'
import Link from 'next/link'
import { HiOutlineCode } from 'react-icons/hi'

const Logo = ({ color }) => {
  return (
    <Link href='/'>
      <a className={`${color} flex hover:text-yellow-300 ease-in duration-200 italic cursor-pointer`}>
            <h3 className='mr-2 text-2xl font-bold'>JDev</h3>
            <HiOutlineCode size={35} />
      </a>
    </Link>
  )
}

export default Logo