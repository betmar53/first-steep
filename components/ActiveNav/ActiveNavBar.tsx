'use client'

import Link from 'next/link'
import React from 'react'
import style from './ActiveNavBar.module.css'
import { usePathname } from 'next/navigation'

interface Props{
    path: string,
    text: string
}

export const ActiveNavBar = ({path,text}:Props) => {

       const pathnames=usePathname();
  return (
    <>
      <Link className={`${style.link} ${(pathnames===path) && style['active-link']}`}  href={path}>{text}</Link>
    
    </>
  )
}
