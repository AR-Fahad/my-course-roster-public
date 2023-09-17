import "./App.css";
import Header from "./components/header/header";
import Courses from "./components/courses/Courses";
import Details from "./components/Details/Details";
import { useState } from "react";

function App() {
  const [details, setDetails] = useState([]);
  const addToDetails = (detail) => {
    const newDetails = [...details, detail];
    setDetails(newDetails);
  };
  console.log(details);

  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
        <div className="lg:flex gap-2">
          <Courses addToDetails={addToDetails}></Courses>
          <Details></Details>
        </div>
      </div>
    </>
  );
}

export default App;
