import React, { PropTypes } from 'react';

const Todo = ({ onClick, onToggle, completed, expanded, title, blockText }) => (
  <div className="list-item-container">
    <i 
      onClick={onClick}
      className={completed ? "list-item-checkbox fa fa-check-circle" : "list-item-checkbox fa fa-check-circle-o"}
    ></i>
    
    <div className="list-item">
      <div className="list-item-title" >
        {title}
        <i
          onClick={onToggle} 
          className={expanded ? "list-item-chevron fa fa-chevron-up" : "list-item-title fa fa-chevron-down"}
        >
        </i>
      </div>
      <div 
        className="list-item-text"
        style={ {
          display: expanded ? 'block' : 'none'
        }}
      >
        {blockText}
      </div>

    </div>
 
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired, 
  expanded: PropTypes.bool.isRequired
}

export default Todo

/* 

    <div className="list-item">
      <h4 className="list-item-title">{title}</h4>
      <div className="list-caret fa fa-caret-down">
        <div className="hideText">{blockText}</div>
      </div>

    </div>

*/