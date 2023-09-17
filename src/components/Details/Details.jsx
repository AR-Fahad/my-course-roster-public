import PropTypes from "prop-types";
import Detail from "../Detail/Detail";
const Details = ({ details, totalCredit, remains, total }) => {
  console.log(details);
  return (
    <div className="bg-white w-[75%] h-[50%] shadow-lg px-10 py-5 rounded-xl my-2 mx-auto">
      <h3 className="text-xl font-bold my-5 text-[#2F80ED]">
        Credit Hour Remaining <span>{remains}</span> hr
      </h3>
      <hr />
      <h3 className="text-xl font-bold my-5">Course Name</h3>
      <ol className="list-decimal mb-5 text-gray-500">
        {details.map((detail, idx) => (
          <Detail key={idx} detail={detail}></Detail>
        ))}
      </ol>
      <hr />
      <h3 className="my-5 font-medium text-gray-600">
        Total Credit Hour : <span>{totalCredit}</span>
      </h3>
      <hr />
      <h3 className="my-5 font-medium text-gray-700">
        Total Price : <span>{total}</span> USD
      </h3>
    </div>
  );
};

Details.propTypes = {
  details: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  remains: PropTypes.number.isRequired,
  totalCredit: PropTypes.number.isRequired,
};

export default Details;
