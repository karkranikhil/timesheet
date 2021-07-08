import React from 'react'
import Home from './Home'
import TimeMain from './time/timeMain';
import PersonalInfoMain from './personalInformation/personalInfoMain';
import AbsenceMain from './absence/absenceMain';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const Body =  () => {
  return(
    <>
        <div className="sectionWrapper">  
            <section className="userProfile">
              <Switch>
                <Route path='/home' component={Home} /> 
                <Route path='/time' component={TimeMain} />
                <Route path='/info' component={PersonalInfoMain} />
                <Route path='/off' component={AbsenceMain} />
              </Switch>       
            </section>
        </div>
    </>
  )
}

export default Body;