import React from 'react'
import { useModal } from '../../context/modal-context'
import ModalRemoveCourse from './ModalRemoveCourse'

export default props => {
  const { setModal } = useModal()
  return (
    <div className="mb-3">
      <h5 className="mb-0">Delete this course</h5>
      <p className="cba">
        <small>Make sure this breakup is for real, because once you delete a course, it cannot be recovered.</small>
      </p>
      <button
        className="btn btn--danger"
        onClick={() => {
          setModal(<ModalRemoveCourse history={props.history} course={props.course} />)
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
        </svg>
        Delete this course
      </button>
    </div>
  )
}