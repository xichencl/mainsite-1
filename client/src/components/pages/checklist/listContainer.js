import React from 'react'
import { connect } from 'react-redux'
import { loadChecklist } from '../../../../actions'


class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.loadChecklist()
  }

}

ListContainer= connect()(ListContainer)
export default ListContainer

let ListContainer = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(loadChecklist(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

