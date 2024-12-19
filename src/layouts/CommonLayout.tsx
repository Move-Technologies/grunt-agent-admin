import { Navbar } from "../components";
import { Outlet } from "react-router-dom";

export function CommonLayout() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="mt-16 flex flex-col  justify-center items-center h-[calc(100vh-64px)] gap-10">
        <Outlet />
      </main>
    </div>
  );
}

export default CommonLayout;
