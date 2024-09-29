import { useState } from "react";
import './Navigation.css';

export const Navigation = () =>
{
  const [navItems] = useState(['Overview', 'Details', 'Reviews', 'Support'])

  return (
    <nav className="nav">
      <ul className="navList">
        {navItems.map(item => (
          <li key={item} className="navItem"><button type="button">{item}</button></li>
        ))}
      </ul>
    </nav>
  )
}