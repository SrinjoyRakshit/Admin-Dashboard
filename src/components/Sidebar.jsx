import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { links } from '../data/dummy'

function Sidebar() {

  const activeMenu = true
  const activeLink = 'flex items-center rounded-lg gap-5 pt-3 pl-4 pb-2.5 text-white text-md m-2'
  const normalLink = 'flex items-center rounded-lg gap-5 pt-3 pl-4 text-gray-700'

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link 
          to='/' 
          onClick={() => {}}
          className='flex items-center gap-3 ml-3 mt-4 text-xl font-semibold tracking-tight dark:text-white text-slate-900'>
            <SiShopware /> <span>Zwen</span>
          </Link>
          <TooltipComponent content="Menu" position='BottomCenter'>
            <button 
            type='button' 
            onClick={() => {}}
            className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block'>
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className='mt-10'>
          {links.map((item) => (
            <div key={item.title}>
              <p className='text-gray-400 -3 mt-4 uppercase'>{item.title}</p>
              {item.links.map((link) => (
                <NavLink 
                to={`${link.name}`} 
                key={link.name}
                onClick={() => {}}
                className={({ isActive }) => {}}
                >

                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar