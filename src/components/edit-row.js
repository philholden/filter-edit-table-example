import React from 'react'

const Row = ({
  id,
  checkNo,
  payee,
  amount,
  isVoid,
  status,
  editRow,
  onView,
}) => {
  const onSubmit = (e) => {
    e.preventDefault()
    const value = (name) =>
      e.target.querySelector(`[name=${name}]`).value

    editRow({
      id,
      checkNo: value('checkNo'),
      payee: value('payee'),
      amount: value('amount'),
      isVoid: e.target.querySelector('[name=isVoid]').checked,
      status: value('status'),
    })
    onView()
  }

  return (
    <form style={styles.row} onSubmit={onSubmit}>
      <div style={styles.cell}>
        <input style={styles.input} defaultValue={checkNo} name="checkNo" />
      </div>
      <div style={styles.cell}>
        <input style={styles.input} defaultValue={payee} name="payee"/>
      </div>
      <div style={styles.cell}>
        <input style={styles.input} defaultValue={amount} name="amount" />
      </div>
      <div style={styles.cell}>
        <input style={styles.input} type="checkbox" defaultChecked={isVoid} name="isVoid" />
      </div>
      <div style={styles.cell}>
        <input style={styles.input} defaultValue={status} name="status" />
      </div>
      <div style={styles.cell}>
        <button>Save</button>
      </div>
    </form>
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
  input: {
    width: '100%',
  },
}

export default Row
