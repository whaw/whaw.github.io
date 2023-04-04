import React from "react"
import experienceJson from "../../data/experience"
import DOMPurify from "dompurify"

const Timeline2 = () => {
  const experience =
    experienceJson.map(({ company, period, copy }, i) => {
      const colPosClass = i % 2 === 0 ? 'left' : 'right'
      return (
        <div key={company} className={`timeline__container position-relative gs_reveal ${colPosClass}`}>
          <div className="content">
            <div role="heading" aria-level="5" className="h5">{company}</div>
            <p className="text-secondary">{period}</p>
            <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(copy) }} />
          </div>
        </div>
      )
    })

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="timeline position-relative">
            {experience}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline2