import React from 'react'
import FilterLink from '../containers/filterLink'
import { setVisibilityFilter } from '../../../../actions/index.js'
import { connect } from 'react-redux';

class ChecklistNavbar extends React.Component {

  componentWillMount () {
    //set SHOW_DURING in defendant mode, SHOW_BEFORE in plaintiff mode
    this.props.party == 'plaintiff' ? this.props.setFilter('SHOW_BEFORE') : this.props.setFilter('SHOW_DURING')
  }

  render(){
  //return only during and after when in defendant case
  return (
  <div className="checklist-navbar">
    {
      this.props.party == "plaintiff" &&
    <FilterLink className="Filter-link-item" filter="SHOW_BEFORE">
      <div className="tab-group">
        <div className="icn-tab before">
          <div className="icn-number">1</div>
        </div>
        <h3 className="tab caption">Before Your Case</h3>
      </div>
    </FilterLink>
    }
    
    <FilterLink className="Filter-link-item" filter="SHOW_DURING">
      <div className="tab-group">
        <div className="icn-tab during">
          <div className="icn-number">{this.props.party == "plaintiff"? 2:1}</div>
        </div>
        <h3 className="tab caption">During Your Case</h3>
      </div>
    </FilterLink>
    
    <FilterLink className="Filter-link-item" filter="SHOW_AFTER">
      <div className="tab-group">
        <div className="icn-tab after">
          <div className="icn-number">{this.props.party == "plaintiff"? 3:2}</div>
        </div>
        <h3 className="tab caption">After Your Case</h3>
      </div>
    </FilterLink>    
  </div>
  );
  
  }

}

const mapStateToProps = (state) => ({
  visibilityFilter : state.visibilityFilter
});

const mapDispatchToProps = (dispatch) => ({
  
    setFilter: (filter) => { 
      dispatch(setVisibilityFilter(filter))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChecklistNavbar)