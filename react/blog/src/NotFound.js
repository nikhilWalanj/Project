import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  return (
    <div className="not-found">
    <h2>SORRY</h2>
    <p>That page cannot be found</p>
    <Link to="/">Back to HomePage</Link>
    </div>
  );
}
 
export default NotFound;