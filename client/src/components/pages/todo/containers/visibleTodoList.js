import { connect } from 'react-redux'
import { toggleTodo, accordionTodo, CLIENT_ROOT_URL, postData } from '../../../../actions/index.js'
// import {  } from '../../../../actions/index.js'
import TodoList from '../components/TodoList';
// import { CLIENT_ROOT_URL, postData } from '../../../actions/index';
import Cookies from 'universal-cookie';
const cookie = new Cookies();
// import { postData } from '../../actions/index';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
  case 'SHOW_BEFORE':
    return todos.filter(t => t.stage == 0) //toggles before/during/after for checklist
  case 'SHOW_DURING':
    return todos.filter(t => t.stage == 1)
  case 'SHOW_AFTER':
    return todos.filter(t => t.stage == 2)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    todosComplete: state.todos,
    loading: state.loading,
    cases: state.user.cases
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      console.log('todoClick dispatch')
      dispatch(toggleTodo(id))
    },
    onAccordionClick: (id) => {
      console.log('accordion dispatch');
      dispatch(accordionTodo(id))
    },
    onSaveClick: (caseId, todos) => {
      const uid = cookie.get('user')._id;
      const steps = todos.map((todo) => 
        ({id: todo.id, completed: todo.completed, stage: todo.stage})
      ); 
      const data = {caseId, steps};
      // console.log("data: ", data);
      // console.log("complete todos: ", todos) ;     
      postData('post_data', null, true, `/user/${uid}/updateCase`, dispatch, data);
    }
  }
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList