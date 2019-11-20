import React, { useCallback, useRef } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { Mutations } from '../../gql'
import { useModal } from '../../context/modal-context'
import Errors from './Errors'

export default props => {
  const name = useRef()
  const { unSetModal } = useModal()
  const [createCourse, { error, loading }] = useMutation(Mutations.CREATE_COURSE, { errorPolicy: 'all' })
  const createCourseCallback = useCallback(() => {
    createCourse({
      variables: {
        name: name.current.value
      }
    }).then(res => {
      unSetModal()
      props.history.push(`/edit/${res.data.createCourse.id}`)
    })
  }, [createCourse, unSetModal, props.history])

  return (
    <div className="row">
      <div className="col-12">
        <h4 className="mt-0 mb-0">Name your new course</h4>
        <p style={{ color: 'var(--color--body-alt)' }}>
          <small>Don't worry, you can always change it later.</small>
        </p>
      </div>
      <div className="col-12">
        <Errors errors={error} />
      </div>
      <div className="col-12 mb-6">
        <label className="label">Course name</label>
        <input ref={name} type="text" placeholder="My course" />
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
          Cancel
          </button>
        <button
          className={`btn btn--secondary ${loading ? 'btn--inprogress btn--deactive' : ''}`}
          style={{
            minWidth: '8.125rem'
          }}
          onClick={() => {
            !loading && createCourseCallback()
          }}
        >
          Create
        </button>
      </div>
    </div>
  )
}
