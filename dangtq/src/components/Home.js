import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div id="body">
                <h2 class="text-center">Courses</h2>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <img class="img-fluid mb-4" src="images/slide-1.jpg" />
                            <h4><Link to="/detail/1">Lorem ipsum dolor sit amet</Link></h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies gravida nulla
                                fermentum suscipit.
                    </p>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <img class="img-fluid mb-4" src="images/slide-2.jpg" />
                            <h4><Link to="/detail/2">Lorem ipsum dolor sit amet</Link></h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies gravida nulla
                                fermentum suscipit.
                    </p>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <img class="img-fluid mb-4" src="images/slide-3.jpg" />
                            <h4><Link to="/detail/3">Lorem ipsum dolor sit amet</Link></h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies gravida nulla
                                fermentum suscipit.
                    </p>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <img class="img-fluid mb-4" src="images/slide-4.jpg" />
                            <h4><Link to="/detail/4">Lorem ipsum dolor sit amet</Link></h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies gravida nulla
                                fermentum suscipit.
                    </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
