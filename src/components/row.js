import React, { Component } from 'react'
import EditRow from './edit-row'
import ViewRow from './view-row'

export default class Row extends Component {

  constructor(props, ctx) {
    super(props, ctx)
    this.setEdit = this.setEdit.bind(this)
    this.state = { isEdit: false }
  }

  setEdit(isEdit) {
    this.setState({ isEdit })
  }

  render() {
    if (this.state.isEdit) {
      return <EditRow { ...{
        ...this.props,
        onView: () => this.setEdit(false),
      }} />
    } else {
      return <ViewRow { ...{
        ...this.props,
        onEdit: () => this.setEdit(true),
        onDelete: () => {
          console.log(this.props)
          this.props.deleteRow(this.props.id)
        }
      }} />
    }
  }
}
