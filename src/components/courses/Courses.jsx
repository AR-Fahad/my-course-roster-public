import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = ({ addToDetails }) => {
  const [courses, setCourses] = useState([]);

  useState(() => {
    fetch("course-data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  });
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      {courses.map((course, idx) => {
        return (
          <Course
            addToDetails={addToDetails}
            key={idx}
            course={course}
          ></Course>
        );
      })}
    </div>
  );
};

export default Courses;

Courses.propTypes = {
  addToDetails: PropTypes.func.isRequired,
};
