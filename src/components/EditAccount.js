import React from 'react'
import { Link } from 'react-router-dom'

function EditAccount() {
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
                        <div className="col-lg-12">
                            <div className="account-div">
                               <h6>ACCOUNT DETAILS</h6>
                               <button type="button" className="btn7">Cancel</button>
                               <button type="button" className="btn8">Save</button>
                               <div className="row">
                                   <div className="col-md-4">
                                       <div className="detail7">
                                            <h5>Email Address</h5>
                                       </div>
                                   </div>
                                   <div className="col-md-8">
                                   <div className="detail8">
                                   <input type="email" class="form-control" placeholder="example@gmail.com"/>
                                    </div>
                                   </div>
                                   <div className="col-md-4">
                                       <div className="detail9">
                                       <h5>Password</h5>
                                       </div>
                                   </div>
                                   <div className="col-md-8">
                                   <div className="detail10">
                                   <input type="email" class="form-control" placeholder="type password"/>
                                   <input id="input3" type="email" class="form-control" placeholder="confirm password"/>
                                    </div>
                                   </div>
                                   <div className="col-md-4">
                                       <div className="detail11">
                                          <h5>Phone Number</h5>
                                       </div>
                                   </div>
                                   <div className="col-md-8">
                                   <div className="detail12">
                                   <input type="email" class="form-control" placeholder="888 999 222 333"/>
                                    </div>
                                   </div>
                                   <div className="col-md-4">
                                       <div className="detail13">

                                       </div>
                                   </div>
                                   <div className="col-md-8">
                                   <div className="detail14">
                                           
                                    </div>
                                   </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
     </div>
    )
}

export default EditAccount
