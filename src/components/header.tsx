// src/components/hyeader.tsx
import './Header.css'; // Pastikan kamu menambahkan file CSS jika diperlukan

function Header() {
  return (
    <header className="header">
      <h1>ROBOTIKA UTY</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
