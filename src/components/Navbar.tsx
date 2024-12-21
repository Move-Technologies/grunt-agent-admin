import { ContainerFull } from "./Container";
import logo from "../assets/grunt_logo.png";
import { Link } from "react-router-dom";
import { Button, buttonVariants } from "./ui/button";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
export function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <ContainerFull>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-10">
            <Link to={"/"}>
              <img alt="grunt logo" src={logo} width={100} height={30} />
            </Link>
            <Link
              to={"/"}
              className="flex items-center gap-1 opacity-60 hover:opacity-100 duration-200"
            >
              <ArrowLeft size={15} /> Back
            </Link>
            <div className="h-7 w-0.5 bg-black/20"></div>
            <div className="flex gap-2">
              <div className="rounded-lg w-7 h-7 shrink-0 border-black border font-semibold flex items-center justify-center bg-white">
                1
              </div>
              <span className="font-semibold">Journey</span>
            </div>
            <div className="w-5 h-0.5 bg-black/20"></div>
            <Link to={"/"} className="flex items-center gap-2 text-black/40">
              <div className=" w-7 h-7 shrink-0 font-semibold flex items-center justify-center bg-white">
                2
              </div>
              <span className="font-semibold ">Review and Finish</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button
              className="text-[#808080] border-[#808080]"
              variant={"outline"}
            >
              Make test call <Phone />
            </Button>
            <Link
              to={"/run-agent"}
              className={`text-white bg-primary hover:bg-primary/90 hover:text-white ${buttonVariants(
                { variant: "outline" }
              )}`}
            >
              Run Agent <ArrowRight />
            </Link>
          </div>
        </div>
      </ContainerFull>{" "}
    </nav>
  );
}

export default Navbar;
