import React from 'react'
import { useModal } from '../../context/modal-context'
import ModalAddNewCourse from './ModalAddNewCourse'

export default props => {
  const { setModal } = useModal()
  return (
    <p className="mt-6 pt-6 text-center">
      Create your first course!
      <button
        className="btn btn--link"
        onClick={() => {
          setModal(<ModalAddNewCourse history={props.history} />)
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
        </svg>
        <span>START NOW</span>
      </button>
    </p>
  )
}
