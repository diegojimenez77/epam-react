import './App.css';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header'
import CreateCourse from './components/CreateCourse/CreateCourse';

function App(props) {
  return (
  <>
    <Header />
    <Courses />
    <CreateCourse />
  </>
  );
}

export default App;
