import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex w-11/12 md:w-10/12 mx-auto">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
        <h1>hello </h1>
        <h1>there</h1>
      </div>
    </>
  );
}

export default App;
