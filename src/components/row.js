import React from 'react'

const Row = ({
  id,
  checkNo,
  payee,
  amount,
  isVoid,
  status,
  onEdit,
  onDelete,
}) => {
  const onChange = ({ target: { value } }) => {
    if (value === 'edit') onEdit(id)
    if (value === 'delete') onDelete(id)
  }

  return (
    <div style={styles.row}>
      <div style={styles.cell}>{checkNo}</div>
      <div style={styles.cell}>{payee}</div>
      <div style={styles.cell}>{amount}</div>
      <div style={styles.cell}>{isVoid ? 'Void' : ''}</div>
      <div style={styles.cell}>{status}</div>
      <div style={styles.cell}>
        <select onChange={onChange}>
          <option>Options</option>
          <option value="edit">Edit</option>
          <option value="delete">Delete</option>
        </select>
      </div>
    </div>
  )
}

const styles = {
  row: {
    display: 'flex',
    flexBasis: 0,
    borderBottom: '1px solid #ccc',
    height: 40,
    alignItems: 'center',
  },
  cell: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
}

export default Row
