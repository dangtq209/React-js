import React, { Component } from 'react'
import Axios from 'axios'

export default class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: []
        }
    }

    getData = () => {
        Axios({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/users",
            data: {}
        }).then((res) => {
            this.setState({
                arr: res.data
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <React.Fragment>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>Fullname</th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.arr.map((val) => {
                                return (
                                    <tr>
                                        <th>{val.name}</th>
                                        <th>{val.username}</th>
                                        <th>{val.email}</th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}
