import React, { useCallback } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useMutation } from '@apollo/react-hooks'
import { Mutations } from '../../gql'
import CurriculumNotFound from './CurriculumNotFound'

export default props => {
  const [createCapture, { loading }] = useMutation(Mutations.CREATE_CAPTURE, { errorPolicy: 'all' })
  const [updateCapture] = useMutation(Mutations.UPDATE_CAPTURE, { errorPolicy: 'all' })
  const createCaptureCallback = useCallback(() => {
    createCapture({
      variables: {
        courseId: props.course.id,
        title: `Capture — ${props.course.captures.length + 1}`,
        order: parseInt(props.course.captures.length, 10)
      }
    }).then(res => {
      props.setCourse({ ...props.course, captures: [...props.course.captures, res.data.createCapture] })
      props.setActive(props.course.captures.length)
    })
  }, [createCapture, props])
  const updateCaptureCallback = useCallback(result => {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const reorder = (list, startIndex, endIndex) => {
      const arr = [...list]
      const [item] = arr.splice(startIndex, 1)
      arr.splice(endIndex, 0, item)

      console.log('%item', 'color:deeppink', item)
      updateCapture({
        variables: {
          order: endIndex,
          id: item.id,
          courseId: props.course.id,
          title: item.title
        }
      })

      return arr
    }

    const captures = reorder(
      props.course.captures,
      result.source.index,
      result.destination.index
    )

    console.log('%cresult', 'color:deeppink', result)

    props.setCourse({ ...props.course, captures })
    props.setActive(result.destination.index)

  }, [updateCapture, props])
  return (
    <>
      {props.course.captures.length === 0 && <CurriculumNotFound />}
      <DragDropContext onDragEnd={updateCaptureCallback}>
        <Droppable droppableId="droppable">
          {provided => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {
                props.course.captures.map((capture, i) => (
                  <Draggable key={capture.id} draggableId={capture.id} index={i}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          ...provided.draggableProps.style,
                          marginBottom: 'var(--spacing)'
                        }}
                      >
                        <div
                          key={capture.id}
                          className={`card card--draggable ${i === props.active || snapshot.isDragging ? 'card--active' : ''}`}
                          onClick={() => {
                            props.setActive(i)
                          }}
                        >
                          <strong className="ellipsis">{capture.title || '(Untitled)'}</strong>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button
        className={`btn btn--block ${loading ? 'btn--inprogress btn--deactive' : ''}`}
        onClick={() => {
          !loading && createCaptureCallback()
        }}
      >
        {loading ? 'Adding capture' : 'Add capture'}
      </button>
    </>
  )
}
