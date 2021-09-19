import React from 'react'
import { Link } from 'react-router-dom'

function Planner(props) {

    const {setOpenPlanner} = props;

    return (
        <div className="main-container">
        <div className="col-lg-12">
            <div className="main-column">
                <div className="row">
                <div className="col-md-4">
                    <div className="side-column">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                       <Link className="nav-link" to="/"><i id="icon" class="fas fa-briefcase"></i>Jobs</Link>
                       <Link className="nav-link" to="/grader"><i id="icon" class="fas fa-tasks"></i>Graders</Link>
                       <Link className="nav-link" to="/planner"><i id="icon" class="fas fa-user-graduate"></i>Add Planners</Link>
                      </li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="center-column">
                        <h2>All planners</h2>
                        <button onClick={() => {setOpenPlanner(true)}} type="button" className="btn4">+ Add New planner</button>
                        <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col" >Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col" >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>email_Address_1@gmail.com</td>
                            <td>322 332 3345</td>
                            <td><i id="icon2" class="fas fa-trash-alt"></i><i id="icon1" class="fas fa-edit"></i></td>
                            </tr>
                            <tr>
                            <td >email_Address_2@gmail.com</td>
                            <td >322 332 3345</td>
                            <td ><i id="icon2" class="fas fa-trash-alt"></i><i id="icon1" class="fas fa-edit"></i></td>
                            </tr>
                            <tr>
                            <td>email_Address_3@gmail.com</td>
                            <td>322 332 3345</td>
                            <td ><i id="icon2" class="fas fa-trash-alt"></i><i id="icon1" class="fas fa-edit"></i></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
          </div>
        </div>
    </div>
    )
}

export default Planner
