import React, { Component } from 'react'
import Table from './components/Table'

export default class App extends Component {
  render() {
    return (
      <div id="wrapper" className="container">
        <h2>Quản lý thành viên</h2>
        <p>Demo đơn giản về hiển thị danh sách thành viên thông qua việc <b>GET Data API bằng Axios Module</b></p>
        <Table />
      </div>
    )
  }
}
