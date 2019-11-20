import React from 'react'
import { Header } from '../elements'
import * as Components from '../components/Dashboard'

export default () => {
  return (
    <>
      <Header />
      <div className="container">
        <Components.Courses />
      </div>
    </>
  )
}