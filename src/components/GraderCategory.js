import React from 'react'
import { Link } from 'react-router-dom'

function GraderCategory() {
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
                        <h1>Email:</h1>
                        <p>email_Address_3@gmail.com</p>
                        <Link  className="nav-link" to="/grader"><button type="button" className="btn3">back</button></Link>
                        <select class="form-control" id="sel3">
                                <option>Using own voice</option> 
                            </select>
                        <form className="row">
                            <div className="col-md-6">
                                <div className="input1">
                            <input type="email" class="form-control" placeholder="Filter by job ID"/>
                            <button className="btn1" type="submit"><i class="fa fa-search"></i></button>
                        </div>
                        </div>
                        <div className="col-md-6">
                           <div className="input2">
                            <input  type="email" class="form-control" placeholder="A-score"/>
                            <select class="form-control" id="sel2">
                                <option>a-score</option> 
                            </select>
                            <button className="btn2" type="submit"><i class="fa fa-search"></i></button>
                          </div>
                        </div>
                        </form>
                        
                        <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col"  >Job ID</th>
                            <th scope="col" >Transcript</th>
                            <th scope="col" >heard</th>
                            <th scope="col" >said</th>
                            <th scope="col" >matched</th>
                            <th scope="col" >a-score</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td scope="row" >asdn97a</td>
                            <td>a boy</td>
                            <td><i class="fas fa-play-circle"></i></td>
                            <td><i class="fas fa-play-circle"></i></td>
                            <td><i class="fas fa-play-circle"></i></td>
                            <td>0.B</td>
                            </tr>
                            <tr>
                            <td scope="row" >asdn97a</td>
                            <td>jump up</td>
                            <td><i class="fas fa-play-circle"></i></td>
                            <td><i class="fas fa-play-circle"></i></td>
                            <td><i class="fas fa-play-circle"></i></td>
                            <td>0.B</td>
                            </tr>
                            <tr>
                            <td scope="row" >asdn97a</td>
                            <td>ope o</td>
                            <td><i class="fas fa-play-circle"></i></td>
                            <td><i class="fas fa-play-circle"></i></td>
                            <td><i class="fas fa-play-circle"></i></td>
                            <td>0.B</td>
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

export default GraderCategory
