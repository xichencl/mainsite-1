import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, title, blockText, onToggle }) => (
  <div className="list-item-container">
    
    <div 
      onClick={onClick}
      className={completed ? "list-item-checkbox fa fa-check-circle" : "list-item-checkbox fa fa-check-circle-o"}
    ></div>
    
    <div className="list-item">
      <div 
        className="list-item-title"
        onClick={onToggle}
      >
        {title}
      </div>
      <div className="list-caret fa fa-caret-down">
        <div className="hideText">{blockText}</div>
      </div>

    </div>

  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired, 
  // toggled: PropTypes.bool.isRequired
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