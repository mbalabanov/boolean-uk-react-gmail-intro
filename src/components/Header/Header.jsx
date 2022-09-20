import Search from "./Search";
import LeftMenu from "./LeftMenu";

function Header() {
  return (
    <header className="header">
      <LeftMenu />
      <Search />
    </header>
  );
}

export default Header;
