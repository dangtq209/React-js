import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <h2 class="text-center">Courses</h2>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <img class="img-fluid mb-4" src="images/slide-1.jpg" />
                            <h4><Link to="/detail">Lorem ipsum dolor sit amet</Link></h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies gravida nulla
                                fermentum suscipit.
                    </p>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <img class="img-fluid mb-4" src="images/slide-2.jpg" />
                            <h4><Link to="/detail">Lorem ipsum dolor sit amet</Link></h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies gravida nulla
                                fermentum suscipit.
                    </p>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <img class="img-fluid mb-4" src="images/slide-3.jpg" />
                            <h4><Link to="/detail">Lorem ipsum dolor sit amet</Link></h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies gravida nulla
                                fermentum suscipit.
                    </p>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <img class="img-fluid mb-4" src="images/slide-4.jpg" />
                            <h4><Link to="/detail">Lorem ipsum dolor sit amet</Link></h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies gravida nulla
                                fermentum suscipit.
                    </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
