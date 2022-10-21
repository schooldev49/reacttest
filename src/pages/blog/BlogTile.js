import Blogs from './posts/blogs'
import {Link} from 'react-router-dom'
const timeStampDate = (timestamp) => {
    let date = new Date(timestamp * 1000)
    return date.getUTCMonth() + 1 + "/" + date.getUTCDate() + "/" + date.getUTCFullYear()
}
const BlogTile = (props) => {
    let {blogTitle, blogImage, blogDate, blogId} = props
    var blogoe;
    Blogs.map((blog) => {
        if (blog.id == blogId){
           blogoe = blog; 
        }
    })
    blogImage = blogImage != '' ? blogImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Circle_%28transparent%29.png/768px-Circle_%28transparent%29.png"
    blogDate = timeStampDate(blogDate)
    return (
        <>
            <Link className='blogTile' to={`${blogoe.id}`}>
                <img src={blogImage} className='blogImg1'/>
                <h2 className="blogTitle">{blogTitle}</h2>
                <p className="blogDate">Published on {blogDate}</p>
            </Link>
        </>
    )
}
export default BlogTile