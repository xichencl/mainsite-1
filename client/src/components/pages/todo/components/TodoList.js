import React, { PropTypes } from 'react'
import Todo from './Todo'
import { getData } from '../../../../actions/index.js'

class TodoList extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.onUpdate(this.props.caseId);
  }

  render() {
    const { todos, onTodoClick, onAccordionClick, loading, onSaveClick } = this.props;
    return ( 
    <div>
      <button type="button" onClick={()=> { onSaveClick(this.props.caseId, this.props.todosComplete)} } >Save</button>
      <div className="checklist-list-container">
        {loading ? 'Loading...': ''}
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => { onTodoClick(todo.id); }}
            onToggle={() => { onAccordionClick(todo.id);}}
          />
        )}
      </div>

    </div>

    );

    }
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    expanded: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired, 
    
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onAccordionClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  // toggled: PropTypes.bool.isRequired
}

// const mapDispatchToProps = (dispatch) => ({
//   onUpdate: () => {
//     getData('LOAD_TODOS', null, true, `/user/${uid}/${this.props.location.state.caseId}`, dispatch);
//   },
// });

export default TodoList;

/*
const TodoList = ({ todos, onTodoClick, loading, toggled }) => (
  <div>

    <div className="checklist-list-container">
      {loading ? 'Loading...': ''}
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </div>

  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired, 
    
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  // toggled: PropTypes.bool.isRequired
}
*/