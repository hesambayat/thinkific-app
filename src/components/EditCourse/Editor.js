import React from 'react'
import Curriculum from './Curriculum'
import Settings from './Settings'

export default props => {
  switch (props.view) {
    case 'Curriculum':
      return <Curriculum {...props} />

    default:
      return <Settings {...props} />
  }
}