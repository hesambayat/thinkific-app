import React from 'react'
import { useModal } from '../../context/modal-context'
import ModalAddNewCourse from './ModalAddNewCourse'

export default props => {
  const { setModal } = useModal()
  return (
    <button
      className="btn btn--secondary mt-4 mb-3"
      onClick={() => {
        setModal(<ModalAddNewCourse history={props.history} />)
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
      </svg>
      <span className="hidden-sm-down">Add course</span>
    </button>
  )
}
