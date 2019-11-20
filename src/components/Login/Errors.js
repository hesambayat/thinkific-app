import React from 'react'

export default props => {
  if (!props.errors) return null
  if (!Array.isArray(props.errors.graphQLErrors)) return null
  return (
    <ul className="error-list">
      {props.errors.graphQLErrors.map(error => <li key={error.message}>{error.message}</li>)}
    </ul>
  )
}