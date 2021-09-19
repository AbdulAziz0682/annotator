import React from 'react'

function AddPlanner() {
    return (
        <div className="main-container">
            <div className="col-lg-12">
                <div className="planner-div">
                    <button>x</button>
                    <h3>Add New Planner</h3>
                    <input type="email" class="form-control" placeholder="Email Address"/>
                    <button>cancel</button>
                </div>
            </div>
        </div>
        
    )
}

export default AddPlanner
