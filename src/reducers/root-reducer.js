import { combineReducers } from 'redux'
import tableReducer from './table-reducer'
import filterReducer from './filter-reducer'

export default combineReducers({
  rows: tableReducer,
  filter: filterReducer,
})
