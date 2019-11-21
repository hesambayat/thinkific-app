import React, { useCallback, useEffect, useRef } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { Mutations } from '../../gql'

export default props => {
  const title = useRef()
  useEffect(() => {
    title.current.value = props.course.captures[props.active].title || ''
  }, [props.active, props.course.captures])
  const [updateCapture] = useMutation(Mutations.UPDATE_CAPTURE, { errorPolicy: 'all' })
  const updateCaptureCallback = useCallback(() => {
    const captures = [...props.course.captures]

    updateCapture({
      variables: {
        order: captures[props.active].order,
        id: captures[props.active].id,
        courseId: props.course.id,
        title: title.current.value,
      }
    })

    captures[props.active] = {...captures[props.active], title: title.current.value}
    props.setCourse({ ...props.course, captures })
  }, [updateCapture, props])
  return (
    <div className="card">
      <label className="label">Capture title</label>
      <input ref={title} onChange={updateCaptureCallback} type="text" placeholder={`Capture - ${props.active + 1}`} className="mb-2" />
    </div>
  )
}
