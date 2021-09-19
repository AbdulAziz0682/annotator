import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Account from "./components/Account";
import AddPlanner from "./components/AddPlanner";
import EditAccount from "./components/EditAccount";
import Grader from "./components/Grader";
import GraderCategory from "./components/GraderCategory";
import JobCategory from "./components/JobCategory";
import Jobs from "./components/Jobs";
import Navbar from "./components/Navbar";
import Planner from "./components/Planner";


function App() {

const [openPlanner, setOpenPlanner] = useState(false);

  return (
    <div>
      <Router>
      <Navbar />
      {openPlanner && <AddPlanner setOpenPlanner={() => setOpenPlanner(false)}/>}
      <Switch>
        <Route exact path = "/" component={Jobs}/>
        <Route path = "/grader" component={Grader}/>
        <Route path = "/jobcategory" component={JobCategory}/>
        <Route path = "/gradercategory" component={GraderCategory}/>
        <Route path = "/planner" component={Planner}/>
        <Route path = "/account" component={Account}/>
        <Route path = "/edit" component={EditAccount}/>
       
      </Switch>
      </Router>
    </div>
  );
}

export default App;
