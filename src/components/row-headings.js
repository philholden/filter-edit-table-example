import React from 'react'

const RowHeadings = () => (
  <div style={styles.row}>
    <div style={styles.cell}>Check #</div>
    <div style={styles.cell}>Payee</div>
    <div style={styles.cell}>Amount</div>
    <div style={styles.cell}>Void</div>
    <div style={styles.cell}>Status</div>
    <div style={styles.cell}></div>
  </div>
)

const styles = {
  row: {
    display: 'flex',
    flexBasis: 0,
    borderBottom: '1px solid #ccc',
    height: 40,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  cell: {
    paddingLeft: 10,
    paddingRight: 10,
    borderRight: '1px solid #ccc',
    flex: 1,
  },
}

export default RowHeadings
