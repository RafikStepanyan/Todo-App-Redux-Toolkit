import { Outlet } from "react-router";
import './style.scss'

export const Layout = () => {
  return (
    <div className="layout">
      <Outlet />
    </div>
  );
};
