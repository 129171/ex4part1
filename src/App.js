import React from "react";
import PeopleInfo from "./PeopleInfo"; // Make sure the path to your PeopleInfo component is correct
import Navbar from "./Navbar";
import CourseList from "./CourseList";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h1>Welcome to the People Info App</h1>
      </header>
      <main>
        <PeopleInfo />
        <CourseList />
      </main>
    </div>
  );
};


export default App;