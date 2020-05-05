import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <Link class="nav-link" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/about">About</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
