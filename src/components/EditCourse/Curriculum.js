import React, { useState } from 'react'
import CurriculumSidebar from './CurriculumSidebar'
import CurriculumContent from './CurriculumContent'

export default props => {
  const [active, setActive] = useState(0)
  const passProps = {
    ...props,
    active,
    setActive
  }
  if (props.course.captures.length === 0) {
    return (
      <div className="row">
        <div className="col-4 offset-4 mt-6 pt-6">
          <div className="curriculum__sidebar">
            <CurriculumSidebar {...passProps} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="row">
      <div className="col-4">
        <div className="curriculum__sidebar">
          <CurriculumSidebar {...passProps} />
        </div>
      </div>
      <div className="col-8">
        <div className="curriculum__content">
          <CurriculumContent {...passProps} />
        </div>
      </div>
    </div>
  )
}
