import React from 'react'

export default props => {
  const menuItems = ['Curriculum', 'Settings']
  return (
    <ul className="editor-navigation">
      {
        menuItems.map(menu => (
          <li key={menu}>
            <button
              className={menu === props.view ? 'editor-navigation__active' : ''}
              onClick={() => {
                props.setView(menu)
              }}
            >
              {menu}
            </button>
          </li>
        ))
      }
    </ul>
  )
}