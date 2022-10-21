import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div style={{textAlign: "center"}}>
            <h1>404 - Not Found.</h1>
            <h2>Go <Link to="/" className="textDeco">back</Link></h2>
        </div>
    )
}