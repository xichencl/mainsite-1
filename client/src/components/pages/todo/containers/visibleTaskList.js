import { connect } from 'react-redux'
import { toggleTodo } from '../../../../actions/index.js'
import TaskList from '../taskList'

const getVisibleTodos = (checklist, filter) => {
  console.log(checklist)
  switch (filter) {
    case 'SHOW_ALL':
      return checklist
    case 'SHOW_COMPLETED':
      return checklist.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return checklist.filter(t => !t.completed)
  }
}

const mapStateToProps = state => {
  return {
    checklist: getVisibleTodos(state.checklist, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)

export default VisibleTaskList
