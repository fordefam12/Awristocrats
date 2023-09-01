import { Link, useLocation } from "react-router-dom";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/Home"
          // Check to see if the currentPage is `Home`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Brands"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "/Brands" ? "nav-link active" : "nav-link"
          }
        >
          Brands
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Men"
          // Check to see if the currentPage is `Men`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "/Men" ? "nav-link active" : "nav-link"
          }
        >
          Men
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Women"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "/Women" ? "nav-link active" : "nav-link"}
        >
          Women
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
