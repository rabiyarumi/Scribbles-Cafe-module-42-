import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  console.log(blog);
  return (
    <div className="space-y-4 mb-16">
      <img
        className="w-full"
        src={cover}
        alt={`cover picture of the title ${title}`}
      />

      <div className="flex justify-between items-center ">
        <div className="flex gap-3">
          <img className="h-14" src={author_img} alt="" />
          <div>
            <p className="text-xl font-bold">{author}</p>
            <p className="opacity-60">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="opacity-60">{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="opacity-50 ml-2"
          >
            <FaBookmark />
          </button>
        </div>
      </div>

      <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>

      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx} className="opacity-60">
            <a href="">#{hash}</a>{" "}
          </span>
        ))}
      </p>

      <button 
      onClick={()=> handleMarkAsRead(reading_time)}
      className="text-purple-500 font-bold underline"
      >Mark as read</button>
    </div>
  );
};

//handling Proptypes
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func
};

export default Blog;
