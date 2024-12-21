import { cn } from "@/lib/utils";
import { Outlet, useLocation } from "react-router-dom";

export function CommonLayout() {
  const pathname = useLocation().pathname;
  console.log(pathname);
  return (
    <div className="flex flex-col">
      <main
        className={cn(
          "mt-16 flex flex-col  justify-center items-center  gap-10",
          {
            "mt-36": pathname == "/sign-in" || pathname == "/sign-up",
          }
        )}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default CommonLayout;
