import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import * as api from '../api'

function *editRow() {
  yield* takeEvery('EDIT_ROW', callEditRow)
}

function *callEditRow({ row }) {
  try {
    yield call(api.editRow, row)
    yield put({ type: 'EDIT_ROW_SUCCEEDED', row })
  } catch (e) {
    console.log(e)
    yield put({ type: 'EDIT_ROW_FAILED' })
  }
}

function *deleteRow() {
  yield* takeEvery('DELETE_ROW', callDeleteRow)
}

function *callDeleteRow({ id }) {
  try {
    yield call(api.deleteRow, id)
    yield put({ type: 'DELETE_ROW_SUCCEEDED', id })
  } catch (e) {

    yield put({ type: 'DELETE_ROW_FAILED' })
  }
}

function *initRows() {
  console.log('init rows')
  yield* takeEvery('INIT_ROWS', callInitRows)
}

function *callInitRows() {
  console.log('call init rows')
  try {
    const rows = yield call(api.getRows)
    yield put({ type: 'INIT_ROWS_SUCCEEDED', rows })
  } catch (e) {
    yield put({ type: 'INIT_ROWS_FAILED' })
  }
}

export default function *rootSaga() {
  console.log('hello')
  yield [
    editRow(),
    deleteRow(),
    initRows(),
  ]
}
