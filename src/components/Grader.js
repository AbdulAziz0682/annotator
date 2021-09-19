import React from 'react'
import { Link } from 'react-router-dom'

function Grader() {
    return (
        <div>
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
                            <h1>Graders</h1>
                            <form className="row">
                                <div className="col-md-6">
                                    <div className="input1">
                                <input type="email" class="form-control" placeholder="Filter by email"/>
                                <button className="btn1" type="submit"><i class="fa fa-search"></i></button>
                            </div>
                            </div>
                            <div className="col-md-6">
                               <div className="input2">
                                <input  type="email" class="form-control" placeholder="type"/>
                                <select class="form-control" id="sel2">
                                    <option>Today</option> 
                                </select>
                                <button className="btn2" type="submit"><i class="fa fa-search"></i></button>
                              </div>
                            </div>
                            </form>
                            <table class="table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">Email</th>
                                <th scope="col">a-score</th>
                                <th scope="col">today</th>
                                <th scope="col">month</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td scope="row">email_address_1@gmail.com</td>
                                <td>0.B</td>
                                <td>12</td>
                                <td>B</td>
                                </tr>
                                <tr>
                                <td scope="row">email_address_1@gmail.com</td>
                                <td>0.B</td>
                                <td>12</td>
                                <td>B</td>
                                </tr>
                                <tr>
                                <Link id="gcategory" className="nav-link" to="gradercategory"><td scope="row">email_address_1@gmail.com</td></Link>
                                <td>0.B</td>
                                <td>12</td>
                                <td>B</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>
              </div>
            </div>
        </div>
        </div>
    )
}

export default Grader
