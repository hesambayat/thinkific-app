import React, { useCallback, useEffect, useRef } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { Mutations } from '../../gql'
import DeleteThisCourse from './DeleteThisCourse'
import Errors from './Errors'

export default props => {
  const name = useRef()
  const subtitle = useRef()
  const price = useRef()
  const duration = useRef()
  const description = useRef()
  useEffect(() => {
    if (props.course === undefined) return

    name.current.value = props.course.name || ''
    subtitle.current.value = props.course.subtitle || ''
    price.current.value = props.course.price || '0.00'
    duration.current.value = props.course.duration || '0.0'
    description.current.value = props.course.desciption || ''
  }, [])
  const [updateCourse, { error, loading }] = useMutation(Mutations.UPDATE_COURSE, { errorPolicy: 'all' })
  const updateCourseCallback = useCallback(() => {
    const variables = {
      id: props.course.id,
      name: name.current.value,
      subtitle: subtitle.current.value,
      price: parseFloat(price.current.value, 10),
      duration: parseFloat(duration.current.value, 10),
      desciption: description.current.value
    }
    updateCourse({ variables })
    props.setCourse({ ...props.course, ...variables })
  }, [updateCourse, props.setCourse, props.course, name, subtitle, price, duration, description])
  return (
    <div className="card">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-1">
          <h4>Settings</h4>
          <Errors errors={error} />
          <label className="label">Name</label>
          <input ref={name} onChange={updateCourseCallback} type="text" placeholder="My course" className="mb-3" />
          <label className="label">Subtitle</label>
          <input ref={subtitle} onChange={updateCourseCallback} type="text" placeholder="Subtitle" className="mb-3" />
          <div className="row">
            <div className="col-12 col-lg-6">
              <label className="label">Price</label>
              <input ref={price} onChange={updateCourseCallback} type="number" placeholder="Price" className="with--dollar-icon mb-3" />
            </div>
            <div className="col-12 col-lg-6">
              <label className="label">Duration (in minutes)</label>
              <input ref={duration} onChange={updateCourseCallback} type="number" placeholder="Duration" className="with--timer-icon mb-3" />
            </div>
          </div>
          <label className="label">Description</label>
          <textarea ref={description} onChange={updateCourseCallback} className="mb-5" />
          <div className="text-right mb-5">
            <button
              className={loading ? 'btn btn--inprogress btn--deactive' : 'btn'}
              style={{ minWidth: '8.125rem' }}
              onClick={() => {
                !loading && updateCourseCallback()
              }}
            >
              {loading ? 'Saving' : 'Save'}
            </button>
          </div>
          <hr />
          <DeleteThisCourse history={props.history} course={props.course} />
        </div>
      </div>
    </div>
  )
}
