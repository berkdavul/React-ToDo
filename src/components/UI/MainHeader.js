import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header>
      <nav className={classes.mainnav}>
        <NavLink className={(navData) => navData.isActive ? classes.active : "" } to="/add">
          Add
        </NavLink>
        <NavLink className={(navData) => navData.isActive ? classes.active : "" } to="/products">
          Tasks
        </NavLink>
      </nav>
    </header>
  );
};
export default MainHeader;
