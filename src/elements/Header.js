import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/auth-context'
import { Avatar } from '.'

export default props => {
  const history = useHistory()
  const [userMenu, setUserMenu] = useState(false)
  const { data: { user }, logout } = useAuth()
  const avatar = <Avatar name={user.name} color="var(--color--secondary)" />
  return (
    <header className="site-header">
      <div className="container">
        <div className="row align-items-center">
          {
            props.hasBackButton && (
              <div className="col-auto">
                <button
                  className="btn btn--link"
                  style={{
                    lineHeight: '1',
                    padding: 0
                  }}
                  onClick={() => {
                    history.goBack()
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                  </svg>
                  <span className="hidden-md-down">EXIT</span>
                </button>
              </div>
            )
          }
          <div className="col">
            {props.loading && <div className="inline-loading" style={{ width: '38%', margin: '0' }} />}
            {!props.loading && <h5 className="mt-0 mb-0 ellipsis"><span>{props.title || 'Dashboard'}</span></h5>}
          </div>
          <div className="col-auto">
            <label onClick={() => setUserMenu(true)}>
              {avatar}
            </label>
            {userMenu && <button className="site-header__user-nav--close" onClick={() => setUserMenu(false)} />}
            <div className={`site-header__user-nav ${userMenu ? '' : 'hide'}`}>
              <div className="site-header__user-nav__header">
                {avatar}
                <span>{user.name}</span>
                <small>{user.email}</small>
              </div>
              <ul>
                <li className="signout"><button onClick={logout}>Sign out</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}