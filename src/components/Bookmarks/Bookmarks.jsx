import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="md:w-1/3 ">
      <div className="text-purple-600 font-bold text-xl py-6 px-3 border-2 border-purple-300 rounded-xl mb-10">Spent time on reading: {readingTime}</div>
      <div className=" border-l-2 pl-8">
      <h2 className="text-3xl font-bold ">Bookmarked Blogs: {bookmarks.length}</h2>
      {
        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
      }
      </div>
    </div>
  );
};


Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
}


export default Bookmarks;
