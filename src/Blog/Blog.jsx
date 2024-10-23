import PropTypes from "prop-types";

const Blog = ({ blog }) => {
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
    <div className="space-y-4 my-14 md:my-20">
      <img src={cover} alt={`cover picture of the title ${title}`} />

      <div className="flex justify-between items-center ">
        <div className="flex gap-3">
          <img className="h-14" src={author_img} alt="" />
          <div>
            <p className="text-xl font-bold">{author}</p>
            <p className="opacity-60">{posted_date}</p>
          </div>
        </div>
        <div>
          <span className="opacity-60">{reading_time} min read</span>
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
    </div>
  );
};

//handling Proptypes
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
