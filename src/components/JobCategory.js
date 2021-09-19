import React from 'react'
import { Link } from 'react-router-dom'

function JobCategory() {
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
                        <h1>Job id:</h1>
                        <p>Job ID 3</p>
                        <Link  className="nav-link" to="/"><button type="button" className="btn3">back</button></Link>
                        <form className="row">
                            <div className="col-md-6">
                                <div className="input1">
                            <input type="email" class="form-control" placeholder="type"/>
                            <button className="btn1" type="submit"><i class="fa fa-search"></i></button>
                        </div>
                        </div>
                        <div className="col-md-6">
                           <div className="input2">
                            <input  type="email" class="form-control" placeholder="type"/>
                            <select class="form-control" id="sel2">
                                <option>Complete</option> 
                            </select>
                            <button className="btn2" type="submit"><i class="fa fa-search"></i></button>
                          </div>
                        </div>
                        </form>
                        <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col" colSpan="3" >Grader</th>
                            <th scope="col" >Complete</th>
                            <th scope="col" >Accuracy</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row" colSpan="3">Email_Address_1@gmail.com</th>
                            <td>20%</td>
                            <td>0.B</td>
                            </tr>
                            <tr>
                            <th colSpan="3" >Email_Address_2@gmail.com</th>
                            <td>0%</td>
                            <td >0.B</td>
                            </tr>
                            <tr>
                            <th colSpan="3"  >Email_Address_3@gmail.com</th>
                            <td >60%</td>
                            <td >0.B</td>
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

export default JobCategory
