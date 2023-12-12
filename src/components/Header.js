import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/learning-paths">Learning Paths</Link>
          </li>
          <li>
            <Link to="/forum">Forum</Link>
          </li>
          <li>
            <Link to="/showcase">Showcase</Link>
          </li>
          <li>
            <Link to="/user-profile">User Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
</Link>