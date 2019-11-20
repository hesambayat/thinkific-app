
import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Queries } from '../gql'
import { Header } from '../elements'
import { NotFound } from '../pages'

export default props => {
  const query = useQuery(Queries.GET_COURSE, { errorPolicy: 'all', fetchPolicy: 'no-cache', variables: { id: props.match.params.courseId } })
  if (query.error) {
    return <NotFound history={props.history} />
  }

  return (
    <>
      <Header hasBackButton loading={query.loading} title={query.data && query.data.course.name} />
      <div className="container">
        <h3 className="mt-0 mb-5">Edit course {props.match.params.courseId}</h3>
      </div>
    </>
  )
}