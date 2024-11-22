

import Link from 'next/link'
import React from 'react'
import { ActiveNavBar } from '../ActiveNav/ActiveNavBar'

const NavList=[
    {path:"/about", text:"Acerca"},
    {path:"/contact", text:"Contacto"},
    {path:"/pricing", text:"Precio"},
]

export const NavBar = () => {
  return (
    <>
    <nav className='flex bg-blue-500 bg-opacity-30 items-center p-2'>
        <Link className='flex mr-2 items-center' href='/'>
        <span className='items-center'>Home</span>
        </Link>
        
        <div className='flex flex-1'></div>
        
        {NavList.map(nav=>(
          <ActiveNavBar  key={nav.path} path={nav.path} text={nav.text} />
            
        ))}
    </nav>
    </>
  )
}
