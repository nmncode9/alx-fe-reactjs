import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      {/* You can add a nav bar or shared layout here */}
      <Outlet />
    </div>
  );
}