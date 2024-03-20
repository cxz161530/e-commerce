import "./SideBar.css";
import React, { Component, useState } from 'react'
import { MenuItem, Menu } from 'semantic-ui-react'


export default function SideBar({handleSelectProduct}) {
    const [activeItem, setActiveItem] = useState("")

  const handleItemClick = (e, { name }) => setActiveItem(name)

    return (
      <Menu pointing vertical>
        <MenuItem
          name='vegetables'
          active={activeItem === 'vegetables'}
          onClick={handleItemClick}
        />
        <MenuItem
          name='Fruits'
          active={activeItem === 'Fruits'}
          onClick={handleItemClick}
        />
        <MenuItem
          name='Meat'
          active={activeItem === 'Meat'}
          onClick={handleItemClick}
        />
        <MenuItem
          name='Dairy'
          active={activeItem === 'Dairy'}
          onClick={handleItemClick}
        />
      </Menu>
    )
  
}