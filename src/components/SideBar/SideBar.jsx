import "./SideBar.css";
import React, { Component, useState } from 'react'
import { MenuItem, Menu } from 'semantic-ui-react'


export default function SideBar({handleSelectProduct}) {
  const [activeItem, setActiveItem] = useState("")

  const handleItemClick = (e, { name }) => handleSelectProduct(name)

    return (
      <Menu pointing vertical>
        <MenuItem
          name='vegetables'
          active={activeItem === 'vegetables'}
          onClick={handleItemClick}
        />
        <MenuItem
          name='fruits'
          active={activeItem === 'Fruits'}
          onClick={handleItemClick}
        />
        <MenuItem
          name='meat'
          active={activeItem === 'Meat'}
          onClick={handleItemClick}
        />
        <MenuItem
          name='dairy'
          active={activeItem === 'Dairy'}
          onClick={handleItemClick}
        />
      </Menu>
    )
  
}