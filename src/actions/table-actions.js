
export const addRow = (row) => ({
  type: 'ADD_ROW',
  row,
})

export const editRow = (row) => ({
  type: 'EDIT_ROW',
  row,
})

export const deleteRow = id => ({
  type: 'DELETE_ROW',
  id,
})

export const initRows = () => ({
  type: 'INIT_ROWS',
})
