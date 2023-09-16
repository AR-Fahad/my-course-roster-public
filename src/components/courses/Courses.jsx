import { useState } from "react";

const Courses = () => {
  //   const [courses, setCourses] = useState([]);

  useState(() => {
    fetch("course-data.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
  return <div></div>;
};

export default Courses;
