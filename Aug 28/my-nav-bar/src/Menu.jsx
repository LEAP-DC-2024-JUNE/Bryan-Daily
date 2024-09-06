import { Link, useLocation } from "react-router-dom";

function Menu() {
  let location = useLocation();

  function check(name) {
    if (name === location.pathname) {
      return 'active';
    } else {
      return '';
    }
  }

  return (
    <div className="header-container">
      <header>
        <div className="header-left">
          <div className="logo">Brand</div>
          <nav>
            <Link className={check('/')} to="/">Home</Link>
            <Link className={check('/about')} to="/about">About</Link>
            <Link className={check('/products')} to="/products">Products</Link>
          </nav>
        </div>
        <div className="header-right">
          <input type="text" name="search" id="search" placeholder={"Search"} />
          <button>Search</button>
        </div>
      </header>
    </div>
  );
}

export default Menu;