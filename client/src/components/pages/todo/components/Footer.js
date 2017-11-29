import React from 'react'
import FilterLink from '../containers/FilterLink'

const ChecklistNavbar = () => (
  <div className="checklist-navbar">
    
    <FilterLink filter="SHOW_BEFORE">
      <div>
        <div className="icn-checklist before">1</div>
        <div className="caption">Before</div>
      </div>
    </FilterLink>
    
    <FilterLink filter="SHOW_DURING">
      <div>
        <div className="icn-checklist before">2</div>
        <div className="caption">During</div>
      </div>
    </FilterLink>
    
    <FilterLink filter="SHOW_AFTER">
      <div>
        <div className="icn-checklist before">3</div>
        <div className="caption">After</div>
      </div>
    </FilterLink>
  </div>
)

export default ChecklistNavbar