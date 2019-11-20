import React from 'react'
import { AuthProvider } from './auth-context'
import { UserProvider } from './user-context'
import { ModalProvider } from './modal-context'

const AppProviders = props => {
  return (
    <AuthProvider>
      <UserProvider>
        <ModalProvider>
          {props.children}
        </ModalProvider>
      </UserProvider>
    </AuthProvider>
  )
}

export { AppProviders }