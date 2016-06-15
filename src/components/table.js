import React from 'react'
import RowHeadings from './row-headings'
import Row from './row'
import { connect } from 'react-redux'
import * as filterActions from '../actions/filter-actions'

let Table = ({ rows, filter, setFilter }) => (
  <div>
    <div>
      <input
        value={filter}
        onChange={({ target }) => setFilter(target.value)}
      />
    </div>
    <RowHeadings />
    {
      rows ?
        rows.map((row) => <Row {...row} key={row.id}/>) :
        'loading'
    }
  </div>
)

const mapStateToProps = ({ rows, filter }) => {
  return {
    rows: rows ?
      Object.values(rows)
        .filter(row => row.payee
        .toLowerCase()
        .search(filter) !== -1):
      [],
    filter,
  }
}

export default connect(
  mapStateToProps,
  filterActions
) (Table)
