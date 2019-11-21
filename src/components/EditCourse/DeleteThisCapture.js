import React from 'react'
import { useModal } from '../../context/modal-context'
import ModalRemoveCapture from './ModalRemoveCapture'

export default props => {
  const { setModal } = useModal()
  return (
    <button
      className="btn btn--link"
      onClick={() => {
        setModal(<ModalRemoveCapture {...props} />)
      }}
    >
      Delete
    </button>
  )
}