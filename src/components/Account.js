import React from 'react'
import { Link } from 'react-router-dom'


function Account() {
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
                               <h4>ACCOUNT DETAILS</h4>
                               <button type="button" className="btn5"><i class="fas fa-trash-alt">&nbsp;Delete</i></button>
                               <Link className="nav-link" to="/edit"><button type="button" className="btn6"><i class="fas fa-edit">&nbsp;Edit</i></button></Link>
                               <div className="row">
                                   <div className="col-md-4">
                                       <div className="detail">
                                            <h5>Email Address</h5>
                                       </div>
                                   </div>
                                   <div className="col-md-8">
                                   <div className="details">
                                       <h5>example@gmail.com</h5>  
                                    </div>
                                   </div>
                                   <div className="col-md-4">
                                       <div className="detail1">
                                       <h5>Password</h5>
                                       </div>
                                   </div>
                                   <div className="col-md-8">
                                   <div className="detail2">
                                        <h5>.................</h5>   
                                    </div>
                                   </div>
                                   <div className="col-md-4">
                                       <div className="detail3">
                                          <h5>Phone Number</h5>
                                       </div>
                                   </div>
                                   <div className="col-md-8">
                                   <div className="detail4">
                                       <h5>888 999 222 333</h5> 
                                    </div>
                                   </div>
                                   <div className="col-md-4">
                                       <div className="detail5">

                                       </div>
                                   </div>
                                   <div className="col-md-8">
                                   <div className="detail6">
                                           
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

export default Account
