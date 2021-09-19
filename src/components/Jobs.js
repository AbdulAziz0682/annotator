import React from 'react'
import { Link } from 'react-router-dom'

function Jobs() {
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
                            <h1>Jobs</h1>
                            <form className="row">
                                <div className="col-md-6">
                                    <div className="input1">
                                <input type="email" class="form-control" placeholder="type"/>
                                <select class="form-control" id="sel1">
                                    <option>Job ID</option> 
                                </select>
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
                                <th scope="col">Job ID</th>
                                <th scope="col">Developer</th>
                                <th scope="col">Project</th>
                                <th scope="col">Complete</th>
                                <th scope="col">Accuracy</th>
                                <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td scope="row">Job ID 1</td>
                                <td>dev_01@gmail.com</td>
                                <td>new vcmd</td>
                                <td>20%</td>
                                <td>0.B</td>
                                <td>Aug 18,2021</td>
                                </tr>
                                <tr>
                                <td scope="row">Job ID 2</td>
                                <td>dev_01@gmail.com</td>
                                <td>new vdlg</td>
                                <td>0%</td>
                                <td>0.B</td>
                                <td>Aug 18,2021</td>
                                </tr>
                                <tr> 
                                <Link id="category" className="nav-link" to="jobcategory"><td>Job ID 3</td></Link>
                                <td>dev_01@gmail.com</td>
                                <td>new vdlg</td>
                                <td>60%</td>
                                <td>0.B</td>
                                <td>Aug 18,2021</td>
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

export default Jobs
