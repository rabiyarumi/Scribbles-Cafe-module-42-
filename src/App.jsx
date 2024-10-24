import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {

  const [bookmarks, setBookmarks] =useState([])
  const [readingTime, setReadingTime] = useState(0)


  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time => {
    setReadingTime(readingTime + time)
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex w-11/12 md:w-10/12 mx-auto gap-10 mt-10">
        <Blogs 
        handleAddToBookmark={handleAddToBookmark}
        handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
