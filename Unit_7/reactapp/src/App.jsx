//using import keyword to connect to and bring in CSS from CSS file

import './App.css';
//importing the Header component
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import AboutMe from './components/aboutMe/AboutMe';
import EmployeeInfo from './components/employeeInformation/EmployeeInfo';

//This is a functional component. It is declared with the function keyword, the name of the function is the component Name(PascalCase)
function App() {
  //functional components have a single return
  return (
    //JSX will only allow ONE JSX element to be returned (That element can contain child elements)
    <div className="App">
      {/*  */}
      <Footer/>
      <AboutMe/>
      <EmployeeInfo name = "Naoise"/>
      <EmployeeInfo name = "Bowser"/>
      <EmployeeInfo name = "Arnold"/>
      <EmployeeInfo name = "William Snakespeare"/>
      <Header/>
    </div>
  );
}

export default App;
