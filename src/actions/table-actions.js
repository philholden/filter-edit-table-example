
export const addRow = (id, row) => ({
  type: 'ADD_ROW',
  id,
  row,
})

export const editRow = (id, row) => ({
  type: 'EDIT_ROW',
  id,
  row,
})

export const deleteRow = id => ({
  type: 'DELETE_ROW',
  id,
})

export const initRows = () => ({
  type: 'INIT_ROWS',
})
