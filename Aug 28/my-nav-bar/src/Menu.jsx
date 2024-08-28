import { Link } from "react-router-dom";

function Menu(props) {
  function check(name) {
    if (name === props.current) {
      return "active";
    } else {
      return ""
    }
  }
  return (
    <div className="header-container">
      <header>
        <div className="header-left">
          <div className="logo">Brand</div>
          <nav>
            <Link className={check('home')} to="/">Home</Link>
            <Link className={check('about')} to="/about">About</Link>
            <Link className={check('products')} to="/products">Products</Link>
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