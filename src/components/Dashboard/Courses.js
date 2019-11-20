import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useLazyQuery } from '@apollo/react-hooks'
import { Queries } from '../../gql'
import { InlineLoading } from '../../elements'
import Errors from './Errors'
import AddNewCourseButton from './AddNewCourseButton'
import CoursesGrid from './CoursesGrid'

export default () => {
  const history = useHistory()
  const [profile, setProfile] = useState()
  const [getProfile, query] = useLazyQuery(Queries.GET_PROFILE, { errorPolicy: 'all', fetchPolicy: 'no-cache' })
  useEffect(() => {
    if (query.called || query.loading) return

    getProfile()
  }, [getProfile, query.called, query.loading])
  useEffect(() => {
    if (!query.data) {
      return
    }

    setProfile(query.data.me)
  }, [query.data])

  return (
    <>
      <div className="row">
        <div className="col">
          <h3>My courses</h3>
        </div>
        <div className="col-auto">
          <AddNewCourseButton history={history} />
        </div>
      </div>
      <Errors errors={query.error} />
      {query.called && query.loading && <InlineLoading />}
      {profile && <CoursesGrid profile={profile} history={history} />}
    </>
  )
}