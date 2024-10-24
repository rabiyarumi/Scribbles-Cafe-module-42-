
import PropTypes from "prop-types";


const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-gray-100 p-4 my-5 rounded-lg">
            <h2 className="text-2xl">{title}</h2>
        </div>
    );
};


Bookmark.propTypes ={
    bookmark: PropTypes.object
}
export default Bookmark;