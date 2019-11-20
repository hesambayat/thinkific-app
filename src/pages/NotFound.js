
import React from 'react'
import { Centered } from '../elements'

export default props => {
  return (
    <Centered>
      <div className="text-center">
        <h3 className="mt-0 mb-5">Oops! Page not found!</h3>
        <button
          className="btn"
          onClick={() => {
            props.history.push('/')
          }}
        >
          Back to home
        </button>
      </div>
    </Centered>
  )
}