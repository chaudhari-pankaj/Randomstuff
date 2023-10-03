import React from 'react'
import "./App.css"
import Header from './components/common/headings/Header'
import Home from './components/Home/Home';
import About from './components/about/About';
import henlo from './components/henlo';
// import CourseHome from './components/allcourses/CourseHome';
// import Team from './components/team/Team';
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
const App = () => {
  return (
    <>
      
      <Router>
      <Header />
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/> 
          <Route path='/bout' exact component={henlo}/> 
          {/* <Route path='/courses' exact component={CourseHome}/>    */}
          {/* <Route path='/team' exact component={Team}/>     */}
        </Switch>
      </Router>
    </>
  )
}

export default App
