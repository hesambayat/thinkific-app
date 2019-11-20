import React from 'react'
import { RandomRgba } from '../lib'

export default props => {
  const backgroundColor = props.color || RandomRgba({ max: 150 })
  const avatar = props.avatar || (props.name || "x").charAt(0)
  return (
    <div className="avatar" style={{ backgroundColor }}>{avatar}</div>
  )
}