import "./App.css";
import Header from "./components/header/header";
import Courses from "./components/courses/Courses";
import Details from "./components/Details/Details";
import { useState } from "react";

function App() {
  const [details, setDetails] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remains, setRemains] = useState(20);
  const [total, setTotal] = useState(0);
  const addToDetails = (detail) => {
    const newCredit = totalCredit + detail.credit;
    if (newCredit <= 20) {
      setTotalCredit(totalCredit + detail.credit);
      setRemains(remains - detail.credit);
      setTotal(total + detail.price);
      const newDetails = [...details, detail];
      setDetails(newDetails);
    } else {
      alert(`Credit Remaining ${remains}hr`);
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
        <div className="lg:flex gap-2">
          <Courses addToDetails={addToDetails}></Courses>
          <Details
            totalCredit={totalCredit}
            remains={remains}
            total={total}
            details={details}
          ></Details>
        </div>
      </div>
    </>
  );
}

export default App;
