import { LuDollarSign } from "react-icons/lu";
import { HiOutlineBookOpen } from "react-icons/hi";
import PropTypes from "prop-types";
const Course = ({ course, addToDetails }) => {
  const { title, credit, description, price, img } = course;

  return (
    <div className="p-4 bg-white shadow-lg rounded-xl">
      <img className="w-full mb-4" src={img} alt="" />
      <h3 className="font-semibold m-2">{title}</h3>
      <p className="text-gray-500 mb-2">{description}</p>
      <div className="mb-2 p-1 flex justify-between">
        <p>
          <LuDollarSign className="inline mb-1" />
          <span className="text-gray-500"> Price:{price}</span>
        </p>
        <p>
          <HiOutlineBookOpen className="inline items-center mb-1" />
          <span className="text-gray-500"> Credit:{credit}hr</span>
        </p>
      </div>
      <button
        onClick={() => addToDetails(course)}
        className="w-full h-9 items-end bg-sky-600 text-white rounded-lg"
      >
        Select
      </button>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  addToDetails: PropTypes.func.isRequired,
};

export default Course;
