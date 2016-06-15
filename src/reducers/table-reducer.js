
export default (state={}, action) => {
  switch(action.type) {
    case 'EDIT_ROW_SUCCEEDED':
    case 'ADD_ROW_SUCCEEDED':
      return {
        ...state,
        [action.id]: action.row,
      }
    case 'INIT_ROWS_SUCCEEDED':
      console.log(action)
      return action.rows
      // return action.rows.reduce(
      //   (acc, row) => {
      //     acc[row.id] = row
      //     return acc
      //   }, {}
      // )
    case 'DELETE_ROW_SUCCEEDED': {
      const nextState = { ...state }
      delete state[action.id]
      return nextState
    }
    default:
      return state
  }
}

