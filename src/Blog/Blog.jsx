import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  console.log(blog);
  return <div></div>;
};

//handling Proptypes
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
