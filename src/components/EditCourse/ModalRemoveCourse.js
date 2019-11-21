import React, { useCallback } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { Mutations } from '../../gql'
import { useModal } from '../../context/modal-context'
import Errors from './Errors'

export default props => {
  const { unSetModal } = useModal()
  const [deleteCourse, { error, loading }] = useMutation(Mutations.DELETE_COURSE, { errorPolicy: 'all' })
  const deleteCourseCallback = useCallback(() => {
    deleteCourse({
      variables: {
        id: props.course.id
      }
    }).then(() => {
      unSetModal()
      props.history.push(`/`)
    })
  }, [deleteCourse, unSetModal, props.history, props.course.id])

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
          No, I keep this course
          </button>
        <button
          className={`btn btn--danger ${loading ? 'btn--inprogress btn--deactive' : ''}`}
          style={{
            minWidth: '15.125rem'
          }}
          onClick={() => {
            !loading && deleteCourseCallback()
          }}
        >
          Yes, Delete this course
        </button>
      </div>
    </div>
  )
}
