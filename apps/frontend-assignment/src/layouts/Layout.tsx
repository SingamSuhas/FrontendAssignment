import { Outlet } from "react-router-dom";
import Dashboard from "../components/Dashboard/dashboard";

export default function Layout() {
  return (
    <>
      <Dashboard />
      <Outlet />
    </>
  );
}