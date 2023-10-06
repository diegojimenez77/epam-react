import './App.css';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header'
import CreateCourse from './components/CreateCourse/CreateCourse';
import { useState } from "react";

function App() {
  const [status, setStatus] = useState('Create Course');
  if (status === "Create Course") {
    return (
      <>
        <Header />
        <Courses />
        <button 
          className='pageChange'
          onClick={ () => {
            if(status === "Create Course"){
            setStatus("Display Course")
          } else setStatus("Create Course")}
          }>{status}</button>
      </>
      );
  } else {
    return (
      <>
        <Header />
        <CreateCourse />
        <button 
          className='pageChange'
          onClick={ () => {
            if(status === "Create Course"){
            setStatus("Display Course")
          } else setStatus("Create Course")}
          }>{status}</button>
      </>
      );
  }
  
}

export default App;
