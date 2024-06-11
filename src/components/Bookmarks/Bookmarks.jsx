import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        
        
        <div className="md:w-1/3 rounded-md bg-gray-300 ml-4  pt-3">
            <div className=''>
                <h4 className='text-4xl text-center'>Spend Time On Read:{readingTime}</h4>
            </div>
            <h2 className="md:text-4xl text-center">Bookmarks Blog:{bookmarks.length}</h2>

            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
        
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;