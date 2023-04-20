import React from 'react'
import { NavbarComp } from './NavbarComp'
import { Search } from './Search'
import { Chats } from './Chats'

export const Sidebar = () => {
  return (
      <div className='sidebar'>
          <NavbarComp />
          <Search />
          <Chats/>
    </div>
  )
}
