import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 React Movies App 🎥
    </span>
  );
};

export default Header;