import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types';
const Blog = ({blog, handleAddToBookMark, handleMarkAsRead}) => {
    const {id,title, cover, author, posted_date, author_img, reading_time,hashtags} = blog;
    return (
        <div className='mb-10'>
            <img className='w-full rounded-lg mb-6' src={cover} alt="" />
            <div className='flex justify-between mb-6'>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className=''>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookMark(blog)} className="ml-2 text-xl"><CiBookmark /></button>
                </div>
                
            </div>
            <button onClick={()=>handleMarkAsRead(id,reading_time)} className="underline text-purple-600 font-bold">Mark As Read</button>
            <h2 className='text-4xl mb-4 mt-10'>{title}</h2>
            <p className='mb-6'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func,
    handleMarkAsRead:PropTypes.func
}

export default Blog;