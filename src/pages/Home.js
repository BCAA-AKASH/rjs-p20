import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="content">
      <h2>Home Page</h2>
      <p>Welcome to my blog website!</p>
      <Link to="/blog">Visit Blog</Link>
    </div>
  );
}

export default Home;