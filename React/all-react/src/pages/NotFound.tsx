import { Link } from "react-router-dom";

const NotFound = () => {
    return <div className="container flex flex-col gap-2">
        Page Not Found
        <Link to="/">Home</Link>
    </div>
}

export default NotFound;