import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex-1 relative">
      <Sidebar />
      <div className="p-10 pl-[360px]">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
