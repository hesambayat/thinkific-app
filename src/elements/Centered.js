import React from 'react'

export default props => {
  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{
          paddingTop: 'var(--spacing)',
          paddingBottom: 'var(--spacing)',
          minHeight: '100vh'
        }}
      >
        <div className="col-12 col-md-6 col-lg-5 col-xl-4">
          {props.children}
        </div>
      </div>
    </div>
  )

}