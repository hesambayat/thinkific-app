import React from 'react'
import { Link } from 'react-router-dom'
import AddNewCourseGrid from './AddNewCourseGrid'
import CourseNotFound from './CourseNotFound'
import { FormatMoney } from '../../lib'

export default props => {
  if (props.profile === undefined) return null

  if (props.profile.courses === null || props.profile.courses.length === 0) {
    return <CourseNotFound history={props.history} />
  }

  return (
    <div className="row">
      {
        props.profile.courses.map(course => (
          <div key={course.id} className="col-12 col-md-6 col-lg-4">
            <Link
              key={course.id}
              className="card"
              to={`/edit/${course.id}`}
            >
              <span className="card__title h5 ellipsis">{course.name || '(Untitled)'}</span>
              <span className="card__info ellipsis cba">
                {course.duration && <span>{`${course.duration} min`}</span>}
                <span>{FormatMoney(course.price)}</span>
              </span>
            </Link>
          </div>
        ))
      }
      <div className="col-12 col-md-6 col-lg-4">
        <AddNewCourseGrid history={props.history} />
      </div>
    </div>
  )
}