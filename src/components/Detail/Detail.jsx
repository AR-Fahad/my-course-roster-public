import PropTypes from "prop-types";
const Detail = ({ detail }) => {
  const { title } = detail;

  return <li>{title}</li>;
};

Detail.propTypes = {
  detail: PropTypes.object.isRequired,
};

export default Detail;
