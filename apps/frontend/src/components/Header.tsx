import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white px-4 py-3">
    <nav className="flex items-center justify-between">
      <Link to="/" className="text-xl font-bold">CodeBlocks</Link>
      <div className="space-x-4">
        <Link to="/problems" className="hover:underline">Problems</Link>
        <Link to="/auth/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  </header>
);

export default Header;
