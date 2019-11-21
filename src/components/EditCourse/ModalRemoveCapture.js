import React, { useCallback } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { Mutations } from '../../gql'
import { useModal } from '../../context/modal-context'
import Errors from './Errors'

export default props => {
  const { unSetModal } = useModal()
  const [deleteCapture, { error, loading }] = useMutation(Mutations.DELETE_CAPTURE, { errorPolicy: 'all' })
  const deleteCaptureCallback = useCallback(() => {
    deleteCapture({
      variables: {
        courseId: props.course.id,
        id: props.course.captures[props.active].id
      }
    }).then(() => {
      unSetModal()
    })

    const captures = props.course.captures.filter(capture => capture.id !== props.course.captures[props.active].id)

    props.setActive(Math.max(props.active - 1, 0))
    props.setCourse({ ...props.course, captures })
  }, [deleteCapture, unSetModal, props])

  return (
    <div className="row">
      <div className="col-12">
        <h4 className="mt-0 mb-0">Are you absolutely sure?</h4>
        <p className="cba">
          <small>This cannot be undone.</small>
        </p>
      </div>
      <div className="col-12">
        <Errors errors={error} />
      </div>
      <div className="col-12 text-right">
        <button
          className="btn btn--link"
          style={{
            marginRight: 'calc(var(--spacing) * 0.5)'
          }}
          onClick={() => {
            unSetModal()
          }}
        >
          No, I keep this capture
          </button>
        <button
          className={`btn btn--danger ${loading ? 'btn--inprogress btn--deactive' : ''}`}
          style={{
            minWidth: '15.125rem'
          }}
          onClick={() => {
            !loading && deleteCaptureCallback()
          }}
        >
          Yes, Delete this capture
        </button>
      </div>
    </div>
  )
}
