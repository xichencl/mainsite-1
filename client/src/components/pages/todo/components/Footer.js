import React from 'react'
import FilterLink from '../containers/filterLink'

const ChecklistNavbar = () => (
  <div className="checklist-navbar">
    
    <FilterLink filter="SHOW_BEFORE">
      <div className="tab-group">
        <div className="icn-tab before">
          <div 
            className="icn-number"
            
          >1</div>
        </div>
        <h3 className="tab caption">Before</h3>
      </div>
    </FilterLink>
    
    <FilterLink filter="SHOW_DURING">
      <div className="tab-group">
        <div className="icn-tab during">
          <div className="icn-number">2</div>
        </div>
        <h3 className="tab caption">During</h3>
      </div>
    </FilterLink>
    
    <FilterLink filter="SHOW_AFTER">
      <div className="tab-group">
        <div className="icn-tab after"><div className="icn-number">3</div></div>
        <h3 className="tab caption">After</h3>
      </div>
    </FilterLink>
  </div>
)

export default ChecklistNavbar