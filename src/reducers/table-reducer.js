
export default (state={}, action) => {
  switch(action.type) {
    case 'EDIT_ROW_SUCCEEDED':
    case 'ADD_ROW_SUCCEEDED':
      return {
        ...state,
        [action.row.id]: action.row,
      }
    case 'INIT_ROWS_SUCCEEDED':
      return action.rows
    case 'DELETE_ROW_SUCCEEDED': {
      const nextState = { ...state }
      delete nextState[action.id]
      return nextState
    }
    default:
      return state
  }
}

