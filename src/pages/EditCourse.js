
import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Queries } from '../gql'
import { Header } from '../elements'
import { NotFound } from '../pages'
import * as Components from '../components/EditCourse'

export default props => {
  const [course, setCourse] = useState()
  const [view, setView] = useState('Curriculum')
  const query = useQuery(Queries.GET_COURSE, { errorPolicy: 'all', fetchPolicy: 'no-cache', variables: { id: props.match.params.courseId } })
  useEffect(() => {
    if (!query.data) return

    setCourse(query.data.course)
  }, [query.data])
  if (query.error) {
    return <NotFound history={props.history} />
  }

  return (
    <>
      <Header hasBackButton loading={query.loading} title={course && course.name} />
      <div className="container mt-4 mb-3">
        <div className="row">
          <div className="col-auto">
            <Components.Navigation setView={setView} view={view} />
          </div>
          <div className="col">
            {(!query.loading && course) && <Components.Editor course={course} setCourse={setCourse} view={view} history={props.history} />}
          </div>
        </div>
      </div>
    </>
  )
}