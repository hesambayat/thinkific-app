import React, { useCallback, useEffect, useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { Mutations } from '../gql'
import { Storage } from '../lib'

const AuthContext = React.createContext()

const AuthProvider = props => {
  const [data, setDate] = useState(Storage.login)
  const [login, { data: loginData, error, loading }] = useMutation(Mutations.LOGIN, { errorPolicy: 'all' });
  const logout = useCallback(() => {
    setDate(undefined)
  }, [setDate])
  useEffect(() => {
    if (loginData === undefined) {
      return
    }

    setDate(loginData.login)
  }, [loginData])
  useEffect(() => {
    Storage.login = data
  }, [data])
  return (
    <AuthContext.Provider value={{ data, error, loading, login, logout }} {...props} />
  )
}

const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
